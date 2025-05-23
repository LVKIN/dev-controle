"use client";
import Link from "next/link";
import { FiUser, FiLogOut, FiLoader, FiLock } from "react-icons/fi"
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { status, data } = useSession();

  const handleLogin = async () => {
    await signIn();
  };

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <header className="w-full flex items-center px-2 py-4 bg-white h-20 border-b border-gray-200 shadow-sm absolute left-0 top-0">
      <div className="flex justify-between items-center w-full max-w-[90%] mx-auto lg:max-w-7xl">
        <Link href="/">
          <h1 className="font-bold text-2xl text-black">DEV <span className="text-blue-600">Controle</span></h1>
        </Link>

        {status === "loading" && (
          <FiLoader className="animate-spin" size={24} color="#1e1e1e" />
        )}

        {status === "unauthenticated" && (
          <button className="cursor-pointer" onClick={handleLogin}>
            <FiLock size={24} color="#1e1e1e" />
          </button>
        )}

        {status === "authenticated" && (
          <div className="flex gap-4">
            <button className="flex items-center gap-1 cursor-pointer">
              <Link href="/dashboard">
                <FiUser size={24} color="#1e1e1e" />
              </Link>
              <span className="hidden sm:block sm:text-sm sm:text-gray-800">
                Olá, <strong>{data?.user?.name}</strong>
              </span>
            </button>
            <button onClick={handleLogout}>
              <Link href="/dashboard">
                  <FiLogOut size={24} color="#cf1010" />
              </Link>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;