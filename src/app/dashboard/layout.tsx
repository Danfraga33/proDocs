import { ReactNode } from "react";
import { auth } from "@/utils/auth";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { portfolioId: string; stockId: string };
}) {
  const session = await auth();

  return (
    <section>
      {session && <h1>Sidebar</h1>}
      {children}
    </section>
  );
}
