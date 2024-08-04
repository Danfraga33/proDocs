"use client";
import "@uploadcare/react-uploader/core.css";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import { addProject } from "@/app/actions/project";
import { Separator } from "@/components/ui/separator";
import ImageUploader from "@/lib/ImageUploader";
import Image from "next/image";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { UploadIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// Problem with layout

const initState = { message: null };

const CreateProject = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const [formState, action] = useFormState<{ message: string | null }>(
    addProject,
    initState,
  );

  return (
    <div className="flex-center justify-start w-[50rem] my-5">
      <div className="space-y-2 text-start">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          New Project
        </h1>
        <p>
          Enter the details of your project here. From how it works, its
          features, all the way to if you built it alone or with a team and to
          deployment
        </p>
      </div>
      <Separator className="my-4" />
      <form
        action={action}
        className="flex flex-col items-start justify-start w-full gap-1"
      >
        <Label htmlFor="name">Name</Label>
        <Input name="name" id="name" required />
        <Label htmlFor="description">Description</Label>
        <Textarea name="description" id="description" required />
        <Label htmlFor="howItWorks">How does it work?</Label>
        <Textarea name="howItWorks" id="howItWorks" required />
        <Label htmlFor="features">Features...</Label>
        <Input name="features" id="features" required />
        <Label htmlFor="image">Image Upload</Label>
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Upload Images</CardTitle>
            <CardDescription>
              Drag and drop your images here or click to upload.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="relative flex items-center justify-center h-48 border-2 border-dashed rounded-md border-muted hover:border-primary cursor-pointer tranisiton duration-150">
                <UploadIcon className="w-10 h-10 text-muted-foreground " />
                <input
                  type="file"
                  multiple
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={handleImageChange}
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {imagePreview && (
                  <Image
                    src={imagePreview}
                    alt="uploadedImage"
                    width={220}
                    height={300}
                    className="object-cover w-full h-48 rounded-md cursor-pointer transition-all hover:scale-105"
                    style={{ aspectRatio: "300/300", objectFit: "cover" }}
                  />
                )}
              </div>
            </div>
          </CardContent>
        </Card>
        {/* <ImageUploader  /> */}

        <Label htmlFor="techStack">Tech Stack used...</Label>
        <Input name="techStack" id="techStack" required />
        <Label htmlFor="libaries">Libaries used...</Label>
        <Input name="libaries" id="libaries" required />
        <Label htmlFor="routes">Routes and what each does...</Label>
        <Textarea name="routes" id="routes" required />
        <Label htmlFor="team">Team...</Label>
        <Textarea name="team" id="team" required />
        <Label htmlFor="deployment">Deployment </Label>
        <Textarea name="deployment" id="deployment" required />
        <Button>Save</Button>
      </form>
    </div>
  );
};

export default CreateProject;
