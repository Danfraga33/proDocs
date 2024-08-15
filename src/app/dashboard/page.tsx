"use server";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { getAllProjects } from "@/app/actions/project";
import ProjectsList from "@/components/ProjectsList";

type Project = {
  id: number;
  name: string;
  description: string;
  features: string | null;
};

type Projects = Project[];

const Dashboard = async () => {
  const projects: Projects = await getAllProjects();

  return (
    <div>
      <ProjectsList />
    </div>
  );
};

export default Dashboard;
