import Link from "next/link";
import { redirect } from "next/navigation";
import { getSelectedProject } from "~/actions/project";

export default async function LayoutOne({
  params,
}: {
  params: { id: string };
}) {
  const project = await getSelectedProject(params);
  console.log(project);
  if (!project) {
    console.error("No project selected");
    redirect("/dashboard");
  }
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {project?.name ?? "Project Title Placeholder"}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A powerful software solution that streamlines your business
                    processes and drives innovation.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <img
                src=""
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
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
                  Key Features
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
                  Screenshots
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
                  Our Team
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
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
