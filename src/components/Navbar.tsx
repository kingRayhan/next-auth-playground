import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const session = useSession();

  return (
    <div className="flex items-center justify-between h-20 max-w-6xl mx-auto ">
      <Link href={`/`}>
        <a className="text-2xl font-semibold ">NextAuth</a>
      </Link>

      <nav className="flex items-center gap-2">
        {session.status === "authenticated" ? (
          <>
            <img
              className="w-10 h-10 rounded-full"
              src={session.data.user?.image as string}
              alt={session.data.user?.name as string}
            />
            <p>{session.data.user?.name}</p>
            <button
              onClick={() => signOut()}
              className="px-2 bg-gray-200 border rounded-md "
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/auth/login">
            <a className="px-2 bg-gray-200 border rounded-md">Login</a>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
