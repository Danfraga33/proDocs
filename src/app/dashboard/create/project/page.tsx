"use client";
import "@uploadcare/react-uploader/core.css";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import { addProject } from "@/app/actions/project";
import { Separator } from "@/components/ui/separator";
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

const initState = { message: null };

const CreateProject = () => {
  const [descriptionImagePreview, setDescriptionImagePreview] = useState("");
  const [featureImagePreview, setFeatureImagePreview] = useState("");

  const handleDescriptionImageChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDescriptionImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleFeatureImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFeatureImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const [formState, action] = useFormState<{ message: string | null }>(
    addProject,
    initState,
  );

  return (
    <div className="flex-center my-5 w-[50rem] justify-start">
      <div className="space-y-2 text-start">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          New Project
        </h1>
        <p>
          Enter the details of your project here. From how it works, its
          features, all the way to deployment.
        </p>
      </div>
      <Separator className="my-4" />
      <form
        action={action}
        className="flex w-full flex-col items-start justify-start gap-1"
      >
        <Label htmlFor="name">Name</Label>
        <Input name="name" id="name" required autoComplete="name" />
        <Label htmlFor="description">Description</Label>
        <Textarea name="description" id="description" required />
        <Label htmlFor="howItWorks">
          Provide a detailed explanation of 5 key steps a user follows when
          navigating through the app. Highlight the features they encounter at
          each stage of their journey.
        </Label>
        <Textarea name="howItWorks" id="howItWorks" required />
        <div className="flex">
          <div>
            <Label htmlFor="image">
              Upload an image that visually represents the project's
              description.
            </Label>
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Upload an Image</CardTitle>
                <CardDescription>
                  Drag and drop your images here or click to upload.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="tranisiton relative flex h-48 cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-muted duration-150 hover:border-primary">
                    <UploadIcon className="h-10 w-10 text-muted-foreground" />
                    <input
                      name="descriptionImage"
                      id="descriptionImage"
                      type="file"
                      multiple
                      className="absolute inset-0 cursor-pointer opacity-0"
                      onChange={handleDescriptionImageChange}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {descriptionImagePreview && (
                      <Image
                        src={descriptionImagePreview}
                        alt="uploadedImage"
                        width={220}
                        height={300}
                        className="h-48 w-full cursor-pointer rounded-md object-cover transition-all hover:scale-105"
                        style={{ aspectRatio: "300/300", objectFit: "cover" }}
                      />
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Label htmlFor="image">
              Upload an image that shows the projects main feature.
            </Label>
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Upload an Image</CardTitle>
                <CardDescription>
                  Drag and drop your images here or click to upload.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="tranisiton relative flex h-48 cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-muted duration-150 hover:border-primary">
                    <UploadIcon className="h-10 w-10 text-muted-foreground" />
                    <input
                      name="featureImage"
                      id="featureImage"
                      type="file"
                      multiple
                      className="absolute inset-0 cursor-pointer opacity-0"
                      onChange={handleFeatureImageChange}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {featureImagePreview && (
                      <Image
                        src={featureImagePreview}
                        alt="uploadedImage"
                        width={220}
                        height={300}
                        className="h-48 w-full cursor-pointer rounded-md object-cover transition-all hover:scale-105"
                        style={{ aspectRatio: "300/300", objectFit: "cover" }}
                      />
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Label htmlFor="techStack">
          Tell me about the tech stack you used. What was the Front-End Language
          you used. What was the back-end language? What database or if you
          didn't use a database, what was the deployment service you used.
        </Label>
        <Textarea name="techStack" id="techStack" required />

        <Label htmlFor="libaries">
          What are some libaries you used ? Again, be detailed in your response.
          Explain <strong>3</strong> libaries.
        </Label>
        <Input name="libaries" id="libaries" required />
        <Label htmlFor="routes">Routes and what each does...</Label>
        <Textarea name="routes" id="routes" required />
        <Label htmlFor="deployment">
          What deployment provider did you use.
        </Label>
        <Textarea name="deployment" id="deployment" required />
        <Label htmlFor="github">Github Link </Label>
        <Input name="github" id="github" />
        <Label htmlFor="live">Live Link </Label>
        <Input name="live" id="live" />

        <Button>Save</Button>
      </form>
    </div>
  );
};

export default CreateProject;
