import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";

const prisma = new PrismaClient();
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub],
});
