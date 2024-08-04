import { ReactNode } from "react";
import Sidebar from "@/components/sidebar";
import Header from "@/components/layouts/Header";
import { createClient } from "@/utils/supabase/client";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { portfolioId: string; stockId: string };
}) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getSession();

  return (
    <section className="flex flex-col h-screen">
      <Header />
      {data.session && <Sidebar />}
      {children}
    </section>
  );
}
