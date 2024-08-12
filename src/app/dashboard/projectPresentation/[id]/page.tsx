"use server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getImages, getSelectedProject } from "@/app/actions/project";
import Image from "next/image";
import { TableOfContents } from "@/components/TableOfContents";
import { Dock } from "@/components/magicui/dock";
import { DockDemo } from "@/components/magicui/DockDemo";
import WordFadeIn from "@/components/magicui/word-fade-in";
import WordPullUp from "@/components/magicui/word-pull-up";
import { ExpandableCardDemo } from "@/components/Expandable";
import { FileTreeDemo } from "../../../../components/FileTree";
import defaultImage from "~/public/defaultTechImage.jpeg";
import {
  BellIcon,
  BriefcaseIcon,
  Code,
  CodepenIcon,
  DatabaseIcon,
  GaugeIcon,
  Github,
  NetworkIcon,
  RocketIcon,
  ThumbsUp,
  WindIcon,
} from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";

export default async function LayoutOne({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createClient();
  const { data: userData, error } = await supabase.auth.getUser();
  const project = await getSelectedProject(params);
  if (!project) {
    console.error("No project selected");
    redirect("/dashboard");
  }
  console.log(project);

  const images = await getImages();
  const imagesObj = images[0];
  console.log(imagesObj);
  return (
    <div className="flex min-h-[100dvh] flex-col scroll-smooth">
      <main className="flex-1">
        <DockDemo
          githubLink={"https://www.google.com"}
          twitterLink={"https://www.x.com"}
          linkedInLink={"https://www.linkedin.com"}
          portfolioLink={"https://www.example.com"}
          title={project?.name}
        />
        <section className="flex-center mt-12">
          <TableOfContents />
        </section>
        <section className="w-full py-12 md:py-16 lg:py-20" id="description">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-center text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Description
                </h1>
                <div className="w-full py-4 leading-5 text-muted-foreground md:text-xl">
                  <WordPullUp
                    words={project.description}
                    className="text-center"
                  />
                </div>
              </div>
              {imagesObj.descriptionImage ? (
                <Image
                  src={imagesObj.descriptionImage}
                  width="550"
                  height="550"
                  alt="DescriptionImage"
                  className="mx-auto aspect-video overflow-hidden rounded-xl border-2 object-cover object-center p-2 sm:w-full lg:order-last"
                />
              ) : (
                <Image
                  src={defaultImage}
                  width="550"
                  height="550"
                  alt="DescriptionImage"
                  className="mx-auto aspect-video overflow-hidden rounded-xl border-2 object-cover object-center p-2 sm:w-full lg:order-last"
                />
              )}
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-16 lg:py-20">
          <h1 className="flex-center pb-16 pt-4 text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            How {project.name} Works
          </h1>
          <ExpandableCardDemo
            step1Title={project.Step1Title ?? "Step 1"}
            step1description={project.Step1Description ?? "Lorem"}
            step2Title={project.Step2Title ?? "Step 2"}
            step2description={project.Step2Description ?? "Lorem"}
            step3Title={project.Step3Title ?? "Step 3"}
            step3description={project.Step3Description ?? "Lorem"}
            step4Title={project.Step4Title ?? "Step 4"}
            step4description={project.Step4Description ?? "Lorem"}
            step5Title={project.Step5Title ?? "Step 5"}
            step5description={project.Step5Description ?? "Lorem"}
          />
        </section>
        <section id="features" className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {project.featureHeadline ?? "Build, Share, Impress, Succeed"}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        {project.featureOneTitle ?? "AI Smart Writer"}
                      </h3>
                      <p className="text-muted-foreground">
                        {project.featureOneDescription ??
                          "Easily create and customize projects with an intuitive form, integrated with OpenAI for smart enhancements."}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        {project.featureTwoTitle ??
                          "AI-Powered Content Enhancement"}
                      </h3>
                      <p className="text-muted-foreground">
                        {project.featureTwoDescription ??
                          "Use OpenAI to refine and optimize project descriptions, ensuring clear and engaging content."}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        {project.featureThreeTitle ??
                          "Effortless Portfolio Sharing"}
                      </h3>
                      <p className="text-muted-foreground">
                        {project.featureThreeDescription ??
                          "Quickly attach project summaries to emails, making it simple to pitch skills and showcase work."}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              {imagesObj.featureImage ? (
                <Image
                  src={imagesObj.featureImage}
                  width="550"
                  height="550"
                  alt="Features"
                  className="mx-auto aspect-video overflow-hidden rounded-xl border-2 object-cover object-center p-2 sm:w-full lg:order-last"
                />
              ) : (
                <Image
                  src={defaultImage}
                  width="550"
                  height="550"
                  alt="Features"
                  className="mx-auto aspect-video overflow-hidden rounded-xl border-2 object-cover object-center p-2 sm:w-full lg:order-last"
                />
              )}
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-16 lg:py-20" id="tech-stack">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-2">
                <div className="my-2 inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Tech Stack
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Powering {project.name} with the Best Tools
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {project.name} runs on cutting-edge tech, delivering fast,
                  smooth, and reliable performance.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <CodepenIcon className="h-10 w-10" />
                  <span className="text-sm font-medium">
                    {project.frontEndLanguage ?? "FrontendPlaceholder"}
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <DatabaseIcon className="h-10 w-10" />
                  <span className="text-sm font-medium">
                    {project.backEndLanguage ?? "BackendPlaceholder"}
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <NetworkIcon className="h-10 w-10" />
                  <span className="text-sm font-medium">
                    {project.databaseOrDeployment ?? "NodeJS"}
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Code className="h-10 w-10" />
                  <span className="text-sm font-medium">
                    {project.libaryOne ?? "Tailwind"}
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <GaugeIcon className="h-10 w-10" />
                  <span className="text-sm font-medium">
                    {project.libaryTwo ?? "Shadcn"}
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <ThumbsUp className="h-10 w-10" />
                  <span className="text-sm font-medium">
                    {project.libaryThree ?? "GitHub"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="routes" className="w-full py-16 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Routes
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Explore {project?.name} Routing
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the routing layout of {project.name}, detailing the
                  organization of route files
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <FileTreeDemo />
              <ol className="text-bold list-decimal leading-7">
                <li className="text-lg font-normal">
                  <span className="font-medium">/:</span> Landing Page
                </li>
                <li className="text-lg font-normal">
                  <span className="font-medium">/login:</span> Login/Register
                  Page
                </li>
                <li className="text-lg font-normal">
                  <span className="font-medium">/Dashboard:</span> Dashboard
                  page consisting of a list of all projects
                </li>
                <li className="text-lg font-normal">
                  <span className="font-medium">/Dashboard/create/project</span>
                  Form page for the user to fill in.
                </li>
                <li className="text-lg font-normal">
                  <span className="font-medium">
                    /Dashboard/projectPresentation/[id]:
                  </span>
                  Dynamic route to show selected project
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section id="team" className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Team
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Meet the {project?.name} Project Developers
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Committed to continuously improving and enhancing{" "}
                  {project?.name} Project.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12">
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src={userData.user?.user_metadata.avatar_url}
                  width="120"
                  height="120"
                  alt={userData.user?.user_metadata.name}
                  className="rounded-full"
                />
                <div className="space-y-1 text-center">
                  <h3 className="text-lg font-bold">
                    {userData.user?.user_metadata.name}
                  </h3>
                  <p className="text-muted-foreground">Software Developer</p>
                </div>
              </div>
              <div className="flex-center">
                <div className="flex gap-2">
                  {project.github && (
                    <Button
                      variant={"link"}
                      className="rounded-xl border border-gray-500"
                      asChild
                    >
                      <a href="https://www.github.com">Github</a>
                    </Button>
                  )}
                  {project.live && (
                    <Button
                      variant={"link"}
                      className="rounded-xl border border-gray-500"
                      asChild
                    >
                      <a href="https://www.github.com">Live</a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 {project?.name} Inc. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link
            href="#"
            className="text-xs underline-offset-4 hover:underline"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs underline-offset-4 hover:underline"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
