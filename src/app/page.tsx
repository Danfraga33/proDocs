import Header from "@/components/layouts/Header";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  return (
    <div className="h-screen">
      <Header />
      <div className="flex-center h-full">
        {!data.user ? (
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        ) : (
          <Button asChild>
            <Link href="/">Logout</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
