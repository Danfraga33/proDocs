import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import TableData from "../lib/TableOfContentData.json";
import { Separator } from "./ui/separator";
export const TableOfContents = () => {
  return (
    <Card className="w-1/2">
      <CardHeader>
        <CardTitle>Table Of Contents</CardTitle>
        <Separator />
      </CardHeader>

      <CardContent>
        <ol className="leading-2">
          <div className="grid w-full items-center ">
            {TableData.map((menuItem) => (
              <li key={menuItem.id}>
                <div className="flex flex-col ">
                  <Label
                    htmlFor="tableEntry"
                    className="text-md hover:bg-gray-200 py-2 px-2 rounded-lg cursor-pointer transition-all duration-150"
                  >
                    <a href={`#${menuItem.id}`}>{menuItem.text}</a>
                  </Label>
                </div>
              </li>
            ))}
          </div>
        </ol>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
};
