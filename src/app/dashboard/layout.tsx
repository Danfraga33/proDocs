"use client";
import "../../../styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/layouts/Header";
import { createClient } from "@/utils/supabase/client";
import DashboardHeader from "@/components/DashboardHeader";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export default function DashboardLayout({ children }: { children: ReactNode }) {
  const path = usePathname();

  return (
    <div>
      <DashboardHeader />
      <div
        className={cn(
          "flex-center antialised grainy min-h-screen bg-gray-50 font-sans dark:bg-stone-800",
          fontSans.variable,
        )}
      >
        {children}
      </div>
    </div>
  );
}
