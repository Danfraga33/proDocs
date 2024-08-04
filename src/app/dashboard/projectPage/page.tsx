"use client";
import {
  BellIcon,
  BriefcaseIcon,
  CodepenIcon,
  DatabaseIcon,
  GaugeIcon,
  GithubIcon,
  NetworkIcon,
  RocketIcon,
  WindIcon,
} from "lucide-react";
import Link from "next/link";

export default async function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container space-y-10 xl:space-y-16">
            <div className="grid gap-4 px-4 md:px-6 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  (TITLE) Acme Project: Revolutionizing the Way You Work
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  (DESCRIPTION) Acme Project is a cutting-edge software
                  development solution that streamlines your workflow and boosts
                  productivity. With its intuitive interface and powerful
                  features, you'll be able to tackle your projects with ease.
                </p>
                <div className="space-x-4">
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View on GitHub
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
            <img
              src=""
              width="1270"
              height="300"
              alt="Acme Project"
              className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
            />
          </div>
        </section>
        <section className="flex-center my-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Routes
          </h2>
          <ol>
            <li>Route 1</li>
            <li>Route 2</li>
            <li>Route 3</li>
          </ol>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Technology Stack (Tech Stack)
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Powering Acme Project with the Best Tools
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Acme Project is built using the latest and greatest
                  technologies to ensure top-notch performance and reliability.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <CodepenIcon className="h-10 w-10" />
                  <span className="text-sm font-medium">React</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <WindIcon className="h-10 w-10" />
                  <span className="text-sm font-medium">Tailwind CSS</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <NetworkIcon className="h-10 w-10" />
                  <span className="text-sm font-medium">Node.js</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <DatabaseIcon className="h-10 w-10" />
                  <span className="text-sm font-medium">PostgreSQL</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <BellIcon className="h-10 w-10" />
                  <span className="text-sm font-medium">Vercel</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <GithubIcon className="h-10 w-10" />
                  <span className="text-sm font-medium">GitHub</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Key Features (How does it work + Features)
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Streamline Your Workflow
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Acme Project is designed to help you and your team work more
                  efficiently, with powerful features that simplify your daily
                  tasks.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Collaboration</h3>
                      <p className="text-muted-foreground">
                        Seamless team collaboration with built-in tools for
                        communication and project management.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Automation</h3>
                      <p className="text-muted-foreground">
                        Streamline your workflows with powerful automation
                        features that save you time and effort.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Scalability</h3>
                      <p className="text-muted-foreground">
                        Grow your business with a platform that can scale to
                        meet your evolving needs.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src=""
                width="550"
                height="310"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="screenshots" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Screenshots (Image Media)
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  See Acme Project in Action
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore the intuitive user interface and powerful features of
                  Acme Project through our collection of screenshots.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src=""
                width="550"
                height="310"
                alt="Screenshot 1"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <img
                src=""
                width="550"
                height="310"
                alt="Screenshot 2"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>
        <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Our Team (Creators)
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Meet the Acme Project Developers
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our talented team of developers is dedicated to continuously
                  improving and enhancing Acme Project.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4">
                <img
                  src=""
                  width="120"
                  height="120"
                  alt="John Doe"
                  className="rounded-full"
                />
                <div className="space-y-1 text-center">
                  <h3 className="text-lg font-bold">John Doe</h3>
                  <p className="text-muted-foreground">Lead Developer</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img
                  src=""
                  width="120"
                  height="120"
                  alt="Jane Smith"
                  className="rounded-full"
                />
                <div className="space-y-1 text-center">
                  <h3 className="text-lg font-bold">Jane Smith</h3>
                  <p className="text-muted-foreground">UI/UX Designer</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img
                  src=""
                  width="120"
                  height="120"
                  alt="Bob Johnson"
                  className="rounded-full"
                />
                <div className="space-y-1 text-center">
                  <h3 className="text-lg font-bold">Bob Johnson</h3>
                  <p className="text-muted-foreground">Backend Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </section>{" "}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center justify-center gap-6">
              <div className="space-y-2 text-center">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Project Goals (Closing)
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Transforming the Way You Work
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Acme Project was designed to streamline your software
                  development workflow, boost productivity, and help you achieve
                  your goals more efficiently.
                </p>
              </div>
              <div className="grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <GaugeIcon className="h-10 w-10" />
                  <h3 className="text-lg font-bold">Increased Efficiency</h3>
                  <p className="text-center text-muted-foreground">
                    Streamline your development workflow and get more done in
                    less time.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <RocketIcon className="h-10 w-10" />
                  <h3 className="text-lg font-bold">Faster Deployment</h3>
                  <p className="text-center text-muted-foreground">
                    Quickly deploy your projects with our seamless integration
                    and automation tools.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <BriefcaseIcon className="h-10 w-10" />
                  <h3 className="text-lg font-bold">Improved Collaboration</h3>
                  <p className="text-center text-muted-foreground">
                    Enhance teamwork and communication with our built-in
                    collaboration features.
                  </p>
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View on GitHub
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
