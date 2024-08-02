import Header from "@/lib/components/Header";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  console.log(data.user);
  return (
    <div className="h-screen">
      <Header />
      <div className="flex-center h-full">
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
}
