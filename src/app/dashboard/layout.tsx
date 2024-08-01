import { ReactNode } from "react";
import { auth } from "@/utils/auth";
import Sidebar from "@/components/sidebar";
import Header from "@/lib/components/Header";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { portfolioId: string; stockId: string };
}) {
  const session = await auth();

  return (
    <section className="flex flex-col h-screen">
      <Header />
      {session && <Sidebar />}
      {children}
    </section>
  );
}
