"use server";
import { db } from "@/utils/db";
import { redirect } from "next/navigation";
import { z } from "zod";
import { createClient } from "@/utils/supabase/server";
import { v4 as uuidv4 } from "uuid";

const projectSchema = z.object({
  name: z.string(),
  description: z.string(),
  howItWorks: z.string(),
  features: z.string(),
  techStack: z.string(),
  libaries: z.string(),
  routes: z.string(),
  deployment: z.string(),
  image: z.any(),
});

if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is not defined");
}

export const addProject = async (prevState: any, formData: FormData) => {
  const {
    description,
    name,
    howItWorks,
    features,
    techStack,
    libaries,
    routes,
    deployment,
    image,
  } = projectSchema.parse({
    name: formData.get("name"),
    description: formData.get("description"),
    howItWorks: formData.get("howItWorks"),
    features: formData.get("features"),
    techStack: formData.get("techStack"),
    libaries: formData.get("libaries"),
    routes: formData.get("routes"),
    team: formData.get("team"),
    deployment: formData.get("deployment"),
    image: formData.get("image"),
  });

  const file = image;
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  const user = data.user;

  try {
    let { data, error } = await supabase.storage
      .from("images")
      .upload(user?.id + "/" + uuidv4(), file);
    // TEXT
    // const { partialObjectStream } = await streamObject({
    //   model: openai("gpt-4o-mini"),
    //   schema: z.object({
    //     formData: z.object({
    //       description: z.string(),
    //       howItWorks: z.string(),
    //       features: z.string(),
    //       techStack: z.string(),
    //       libaries: z.string(),
    //       routes: z.string(),
    //       deployment: z.string(),
    //     }),
    //   }),
    //   prompt: `Either elaborate or summarize, using thrid person and in an informal way; the given text found here \n${description},\n${howItWorks}, \n${features}, \n${techStack}, \n${libaries},\n${team},\n${deployment}. Ensuring the final word count is roughly 350 words`,
    // });
    // I built an app using NEXTJS using AI that helps devs track their journey when finding a job, from where to look to what to say in an interview.
    // for await (const partialObject of partialObjectStream) {
    //   console.clear();
    //   console.log(partialObject);
    // }

    const newProject = await db.project.create({
      data: {
        name,
        description,
        howItWorks,
        features,
        techStack,
        libaries,
        routes,
        deployment,
      },
    });
  } catch (e) {
    console.error(e);
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
      id: Number(id),
    },
  });
  return project;
};

// Delete
// Edit

export const tidyUpText = async ({ inputText }: { inputText: string }) => {};

export const getImages = async () => {
  const supabase = createClient();
  const userData = await supabase.auth.getUser();
  const user = userData.data.user;
  const { data, error } = await supabase.storage
    .from("images")
    .list(user?.id + "/");

  //https://hazpdcnwfauaoahrfvbf.supabase.co/storage/v1/object/public/images/8d42ce46-2546-400e-ad8e-8f9e45d7e1c4/c2700d76-1dde-4d64-8bb0-1d95213a396d
  const CDNURL =
    "https://hazpdcnwfauaoahrfvbf.supabase.co/storage/v1/object/public/images/";
  let imageUrls: string[] = [];
  const images = data?.map((image) => {
    imageUrls.push(`${CDNURL}/${user?.id}/${image.name}`);
  });
  console.log("Images Arr:", imageUrls);
  return imageUrls;
};
