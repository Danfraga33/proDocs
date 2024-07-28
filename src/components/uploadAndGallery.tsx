import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { UploadIcon } from "lucide-react";

const UploadAndGallery = () => {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Upload Images</CardTitle>
        <CardDescription>
          Drag and drop your images here or click to upload.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="relative flex items-center justify-center h-48 border-2 border-dashed rounded-md border-muted hover:border-primary cursor-pointer">
            <UploadIcon className="w-10 h-10 text-muted-foreground" />
            <input
              type="file"
              multiple
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <img
              src="/placeholder.svg"
              alt="Uploaded Image"
              width={300}
              height={300}
              className="object-cover w-full h-48 rounded-md cursor-pointer transition-all hover:scale-105"
            />
            <img
              src="/placeholder.svg"
              alt="Uploaded Image"
              width={300}
              height={300}
              className="object-cover w-full h-48 rounded-md cursor-pointer transition-all hover:scale-105"
            />
            <img
              src="/placeholder.svg"
              alt="Uploaded Image"
              width={300}
              height={300}
              className="object-cover w-full h-48 rounded-md cursor-pointer transition-all hover:scale-105"
            />
            <img
              src="/placeholder.svg"
              alt="Uploaded Image"
              width={300}
              height={300}
              className="object-cover w-full h-48 rounded-md cursor-pointer transition-all hover:scale-105"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UploadAndGallery;
