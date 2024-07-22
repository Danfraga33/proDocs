"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { addUser } from "../../../actions/auth";
import { useFormState } from "react-dom";
import { SignIn } from "./sign-in";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const initState = { message: null };

const SignUpForm = () => {
  const { data: session } = useSession();

  return (
    <div className="flex-center flex-col gap-4 font-semibold ">
      {session ? (
        <>
          <p>Logged in</p>
          {JSON.stringify(session)}
          <Link href="/dashboard">Dashboard</Link>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      ) : (
        <>
          <p>Logged Out</p>

          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </div>
  );
};

export default SignUpForm;
