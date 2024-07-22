import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { getAllProjects } from "~/actions/project";

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
    <div className="flex-center">
      <Button asChild>
        <Link href="/dashboard/create/project">Create New Project</Link>
      </Button>
      {projects.map((project) => (
        <div key={project.id}>
          <Link href={`/dashboard/projectPresentation/${project.id}`}>
            {project.name}
          </Link>
          ;
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
