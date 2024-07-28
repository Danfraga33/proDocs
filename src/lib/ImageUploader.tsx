"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UploadDropzone } from "@/utils/uploadThing";
import { CircleX } from "lucide-react";
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
  console.log(fileData);
  return (
    <>
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Upload Images</CardTitle>
          <CardDescription>
            Drag and drop your images here or click to upload.
          </CardDescription>
        </CardHeader>
        <div className="relative flex items-center justify-center h-48 border-2 border-dashed rounded-md border-muted hover:border-primary cursor-pointer transition-all duration-200">
          <UploadDropzone
            className="border-none  "
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              console.log(res);
              addImageUrls(res[0].url);
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>
        <CardTitle className="text-md font-semibold flex justify-center">
          Image Gallery
        </CardTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 border-2 rounded-xl mt-2">
          {fileData.map((img) => (
            <div key={img} className="relative">
              <Image
                src={img ?? ""}
                alt="Uploaded Image"
                width={300}
                height={300}
                className="object-cover w-full h-48 rounded-md cursor-pointer border-2 border-gray-500 p-1 relative transition-all hover:scale-105"
              />
              <button onClick={() => removeImg(img)}>
                <CircleX className="absolute top-1 right-1 text-red-500" />
              </button>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};

export default ImageUploader;
