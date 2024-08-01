"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UploadDropzone } from "@/utils/uploadThing";
import { CircleX, UploadIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
interface ClientUploadedFileData<T> {
  uploadedBy: string;
  // add other fields if necessary
}
const ImageUploader = () => {
  const [fileData, setFileData] = useState<string[]>([]);
  const addImageUrls = (newUrls: string) => {
    setFileData((prevUrls) => [...prevUrls, newUrls]);
  };
  const removeImg = (img: string) => {
    setFileData((prevFileData) => prevFileData.filter((url) => url !== img));
  };

  return (
    <>
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Upload Images</CardTitle>
          <CardDescription>
            Drag and drop your images here or click to upload.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative flex items-center justify-center h-48 border-2 border-dashed rounded-md border-muted hover:border-primary cursor-pointer">
            <UploadIcon className="w-10 h-10 text-muted-foreground" />
            <input
              name="image"
              type="file"
              multiple
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ImageUploader;
