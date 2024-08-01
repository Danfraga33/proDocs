-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Software Development Project',
    "description" TEXT NOT NULL DEFAULT 'A Software solution that uses cutting edge technology',
    "howItWorks" TEXT NOT NULL,
    "features" TEXT,
    "techStack" TEXT,
    "libaries" TEXT,
    "routes" TEXT,
    "team" TEXT,
    "deployment" TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
