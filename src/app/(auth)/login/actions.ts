"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { z } from "zod";

const authSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export async function login(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = authSchema.parse({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/login/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);
  console.log({
    error,
    data,
  });

  if (error) {
    redirect("/login/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
