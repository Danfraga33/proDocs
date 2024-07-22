"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import { addProject } from "../../../../../actions/auth";
const initState = { message: null };

const CreateProject = () => {
  const [formState, action] = useFormState<{ message: string | null }>(
    addProject,
    initState,
  );
  return (
    <div className="flex-center justify-start w-[50rem]">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        New Project
      </h1>
      <form
        action={action}
        className="flex flex-col items-start justify-start w-full"
      >
        <Label htmlFor="name">Name</Label>
        <Input name="name" id="name" />
        <Label htmlFor="description">Description</Label>
        <Textarea name="description" id="description" />
        <Button>Save</Button>
      </form>
    </div>
  );
};

export default CreateProject;
