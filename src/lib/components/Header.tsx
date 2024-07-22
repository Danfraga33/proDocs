import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <Link href="/" className="p-4">
        Header
      </Link>
    </>
  );
};

export default Header;
