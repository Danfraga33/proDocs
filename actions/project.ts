import { db } from "@/utils/db";
import { redirect } from "next/navigation";
import { z } from "zod";

const authSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export const addProject = async (prevState: any, formData: FormData) => {
  const data = authSchema.parse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  try {
    const newProject = await db.project.create({
      data: {
        name: data.name,
        description: data.description,
      },
    });
    console.log(newProject);
  } catch (e) {
    console.error(e);
  } finally {
    redirect("/dashboard");
  }
};

export const getAllProjects = async () => {
  const project = await db.project.findMany();
  if (!project) throw new Error("No Project");
  console.log(project);
  return project;
};

export const getSelectedProject = async ({ id }: { id: string }) => {
  const project = await db.project.findFirst({
    where: {
      id: Number(id),
    },
  });
  return project;
};
