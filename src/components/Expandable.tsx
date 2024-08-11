"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo({
  step1Title,
  step2Title,
  step3Title,
  step4Title,
  step5Title,
}: {
  step1Title: string;
  step2Title: string;
  step3Title: string;
  step4Title: string;
  step5Title: string;
}) {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null,
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));
  console.log(step1Title);

  const cards = [
    {
      description: "Step 1",
      title: `${step1Title}`,
      src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
      ctaText: "Expand",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            Users create an account and sign in using Supabase authentication,
            ensuring secure and seamless registration. User details are then
            stored in the database with the Prisma adapter, providing efficient
            data management and querying. This integration ensures secure data
            handling, streamlined authentication, and reliable performance,
            establishing a solid foundation for all user interactions on the
            platform.
          </p>
        );
      },
    },
    {
      description: "Step 2",
      title: `${step2Title}`,
      src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
      ctaText: "Expand",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            Users navigate to the create project page using Next.js prefetching
            for quick navigation. The app is styled with Shadcn and offers a
            dashboard where users can easily view their projects. This setup
            ensures a smooth and efficient user experience, making project
            management straightforward and intuitive.
          </p>
        );
      },
    },

    {
      description: "Step 3",
      title: `${step3Title}`,
      src: "https://assets.aceternity.com/demos/metallica.jpeg",
      ctaText: "Expand",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            Users fill out project details using SurveyJS forms, with Next.js
            handling form data extraction. The app leverages the OpenAI API to
            summarize or elaborate on user inputs, ensuring the content meets
            word count requirements and is well-polished. This integration
            streamlines the process, making it easy for users to provide
            detailed project information.
          </p>
        );
      },
    },
    {
      description: "Step 4",
      title: `${step4Title}`,
      src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
      ctaText: "Expand",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            The project is saved into the Supabase Postgres database, with
            images stored in the bucket. Users are redirected to their generated
            webpage with all the information they've entered. They can view a
            list of their projects, reenter using dynamic routing, and click a
            copy code button to paste it into their portfolio.
          </p>
        );
      },
    },
    {
      description: "Step 5",
      title: `${step5Title}`,
      src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
      ctaText: "Expand",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            Users can click 'Share Project' to compose an email with an excerpt
            of their project attached. This feature allows them to pitch their
            skills and showcase their work directly to employers or other
            contacts, making it easy to highlight their capabilities and
            projects in a professional manner.
          </p>
        );
      },
    },
  ];

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 h-full w-full bg-black/20"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 z-[100] grid place-items-center">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white lg:hidden"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="flex h-full w-full max-w-[500px] flex-col overflow-hidden bg-white dark:bg-neutral-900 sm:rounded-3xl md:h-fit md:max-h-[90%]"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="h-80 w-full object-cover object-top sm:rounded-tl-lg sm:rounded-tr-lg lg:h-80"
                />
              </motion.div>

              <div>
                <div className="flex items-start justify-between p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div className="relative px-4 pt-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-40 flex-col items-start gap-4 overflow-auto pb-10 text-xs text-neutral-600 [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] dark:text-neutral-400 md:h-fit md:text-sm lg:text-base"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="mx-auto w-full max-w-2xl gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="flex cursor-pointer flex-col items-center justify-between rounded-xl p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800 md:flex-row"
          >
            <div className="flex flex-col gap-4 md:flex-row">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 rounded-lg object-cover object-top md:h-14 md:w-14"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="text-center font-medium text-neutral-800 dark:text-neutral-200 md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-center text-neutral-600 dark:text-neutral-400 md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="mt-4 rounded-full bg-gray-100 px-4 py-2 text-sm font-bold text-black hover:bg-green-500 hover:text-white md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Step 1",
    title: "User creates an account & signs in",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Expand",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Users create an account and sign in using Supabase authentication,
          ensuring secure and seamless registration. User details are then
          stored in the database with the Prisma adapter, providing efficient
          data management and querying. This integration ensures secure data
          handling, streamlined authentication, and reliable performance,
          establishing a solid foundation for all user interactions on the
          platform.
        </p>
      );
    },
  },
  {
    description: "Step 2",
    title: "User navigates to the creat project page",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Expand",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Users navigate to the create project page using Next.js prefetching
          for quick navigation. The app is styled with Shadcn and offers a
          dashboard where users can easily view their projects. This setup
          ensures a smooth and efficient user experience, making project
          management straightforward and intuitive.
        </p>
      );
    },
  },

  {
    description: "Step 3",
    title: "User inserts details pertinent to project",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "Expand",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Users fill out project details using SurveyJS forms, with Next.js
          handling form data extraction. The app leverages the OpenAI API to
          summarize or elaborate on user inputs, ensuring the content meets word
          count requirements and is well-polished. This integration streamlines
          the process, making it easy for users to provide detailed project
          information.
        </p>
      );
    },
  },
  {
    description: "Step 4",
    title:
      "Project webpage is generated, saved into a Database & ready for code copy.",
    src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
    ctaText: "Expand",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          The project is saved into the Supabase Postgres database, with images
          stored in the bucket. Users are redirected to their generated webpage
          with all the information they've entered. They can view a list of
          their projects, reenter using dynamic routing, and click a copy code
          button to paste it into their portfolio.
        </p>
      );
    },
  },
  {
    description: "Step 5",
    title: "Attach except of project to an email to send to employer.",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
    ctaText: "Expand",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Users can click 'Share Project' to compose an email with an excerpt of
          their project attached. This feature allows them to pitch their skills
          and showcase their work directly to employers or other contacts,
          making it easy to highlight their capabilities and projects in a
          professional manner.
        </p>
      );
    },
  },
];
