"use server";
import db from "@/utils/db";
import { redirect } from "next/navigation";
import { z } from "zod";
import { createClient } from "@/utils/supabase/server";
import { v4 as uuidv4 } from "uuid";
import { openai } from "@ai-sdk/openai";
import { streamObject } from "ai";

const projectSchema = z.object({
  name: z.string(),
  description: z.string(),
  descriptionImage: z.any(),
  howItWorks: z.string(),
  featureImage: z.any(),
  techStack: z.string(),
  libaries: z.string(),
  routes: z.string(),
  deployment: z.string(),
  github: z.string(),
  live: z.string(),
});

if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is not defined");
}

export const addProject = async (prevState: any, formData: FormData) => {
  const {
    description,
    descriptionImage,
    name,
    howItWorks,
    featureImage,
    techStack,
    libaries,
    routes,
    deployment,
    github,
    live,
  } = projectSchema.parse({
    name: formData.get("name"),
    description: formData.get("description"),
    descriptionImage: formData.get("descriptionImage") as File,
    howItWorks: formData.get("howItWorks"),
    featureImage: formData.get("featureImage") as File,
    techStack: formData.get("techStack"),
    libaries: formData.get("libaries"),
    routes: formData.get("routes"),
    deployment: formData.get("deployment"),
    github: formData.get("github"),
    live: formData.get("live"),
  });

  // Upload Images
  const descriptionImageFile = descriptionImage;
  const featureImageFile = featureImage;
  console.log("FEATURE", featureImageFile);
  console.log("Description", descriptionImageFile);
  const supabase = createClient();
  const { data: authData, error: authError } = await supabase.auth.getUser();
  if (authError || !authData.user) throw new Error("User not authenticated");
  const userId = authData.user.id;

  try {
    let { data: featureData, error: featureError } = await supabase.storage
      .from("featureImages")
      .upload(userId + "/" + name + "/" + uuidv4(), featureImageFile);
    if (featureError) throw featureError;
    let { data: descriptionData, error } = await supabase.storage
      .from("descriptionImages")
      .upload(userId + "/" + name + "/" + uuidv4(), descriptionImageFile);
    console.log("FEATUREIMAGESUPA", featureData);
    console.log("DESCRIPTIONIMAGESUPA", descriptionData);

    // TEXT
    const { partialObjectStream } = await streamObject({
      model: openai("gpt-4o-mini"),
      schema: z.object({
        formData: z.object({
          description: z.string(),
          howItWorks: z.string(),
          Step1Title: z.string(),
          Step1Description: z.string(),
          Step2Title: z.string(),
          Step2Description: z.string(),
          Step3Title: z.string(),
          Step3Description: z.string(),
          Step4Title: z.string(),
          Step4Description: z.string(),
          Step5Title: z.string(),
          Step5Description: z.string(),
          featureHeadline: z.string(),
          featureOneTitle: z.string(),
          featureOneDescription: z.string(),
          featureTwoTitle: z.string(),
          featureTwoDescription: z.string(),
          featureThreeTitle: z.string(),
          featureThreeDescription: z.string(),
          techStack: z.string(),
          frontEndLanguage: z.string(),
          backEndLanguage: z.string(),
          databaseOrDeployment: z.string(),
          libaryOne: z.string(),
          libaryOneDescription: z.string(),
          libaryTwo: z.string(),
          libaryTwoDescription: z.string(),
          libaryThree: z.string(),
          libaryThreeDescription: z.string(),
          routes: z.string(),
          deployment: z.string(),
        }),
      }),
      prompt: `Strictly summarize or elaborate, using first person and in an informal way, **only** the given text found here.
      ---${name}, \n${description},\n${howItWorks}, \n${techStack}, \n${libaries},\n${deployment}---\n  
      Ensuring the final word count is roughly 350 words`,
    });
    let combinedObject;
    for await (const partialObject of partialObjectStream) {
      console.clear();
      console.log(partialObject);
      combinedObject = partialObject;
    }
    console.log(combinedObject);
    const newProject = await db.project.create({
      data: {
        name,
        description,
        descriptionImage: descriptionData?.fullPath,
        howItWorks,
        Step1Title: combinedObject?.formData?.Step1Title,
        Step1Description: combinedObject?.formData?.Step1Description,
        Step2Title: combinedObject?.formData?.Step2Title,
        Step2Description: combinedObject?.formData?.Step2Description,
        Step3Title: combinedObject?.formData?.Step3Title,
        Step3Description: combinedObject?.formData?.Step3Description,
        Step4Title: combinedObject?.formData?.Step3Title,
        Step4Description: combinedObject?.formData?.Step3Description,
        Step5Title: combinedObject?.formData?.Step3Title,
        Step5Description: combinedObject?.formData?.Step3Description,
        featureHeadline: combinedObject?.formData?.featureHeadline,
        featureOneTitle: combinedObject?.formData?.featureOneTitle,
        featureTwoTitle: combinedObject?.formData?.featureTwoTitle,
        featureThreeTitle: combinedObject?.formData?.featureThreeTitle,
        featureImage: featureData?.fullPath,
        techStack,
        frontEndLanguage: combinedObject?.formData?.frontEndLanguage,
        backEndLanguage: combinedObject?.formData?.backEndLanguage,
        databaseOrDeployment: combinedObject?.formData?.databaseOrDeployment,
        libaries,
        libaryOne: combinedObject?.formData?.libaryOne,
        libaryTwo: combinedObject?.formData?.libaryTwo,
        libaryThree: combinedObject?.formData?.libaryThree,
        routes,
        deployment,
        github,
        live,
      },
    });
  } catch (e) {
    console.error("Failed to add project:", e);
  } finally {
    redirect("/dashboard");
  }
};

export const getAllProjects = async () => {
  const projects = await db.project.findMany();
  if (!projects) throw new Error("No Project");

  return projects;
};

export const getSelectedProject = async ({ id }: { id: string }) => {
  const project = await db.project.findFirst({
    where: {
      name: id,
    },
  });

  return project;
};

// Delete
// Edit

export const getImages = async () => {
  const supabase = createClient();
  const userData = await supabase.auth.getUser();
  const { data: authData, error: authError } = await supabase.auth.getUser();
  const project = await db.project.findMany({});
  if (authError || !authData.user) throw new Error("User not authenticated");
  const userId = authData.user.id;

  const CDNUrl =
    "https://hazpdcnwfauaoahrfvbf.supabase.co/storage/v1/object/public";
  const images = project?.map((image) => {
    const descriptionImage = image?.descriptionImage;
    const featureImage = image?.featureImage;
    console.log(descriptionImage);
    return {
      descriptionImage: `${CDNUrl}/${descriptionImage}`,
      featureImage: `${CDNUrl}/${featureImage}`,
    };
  });

  return images;
};
