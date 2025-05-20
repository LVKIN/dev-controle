import Link from "next/link";
import { FiUser, FiLogOut } from "react-icons/fi"

const Header = () => {
  return (
    <header className="w-full flex items-center px-2 py-4 bg-white h-20 border-b border-gray-200 shadow-sm absolute left-0 top-0">
      <div className="flex justify-between items-center w-full max-w-[90%] mx-auto lg:max-w-7xl">
        <Link href="/">
          <h1 className="font-bold text-2xl text-black">DEV <span className="text-blue-600">Controle</span></h1> 
        </Link>

        <div className="flex gap-4">
            <button>
                <Link href="/dashboard">
                    <FiUser size={24} color="#1e1e1e" />
                </Link>
            </button>
            <button>
                <Link href="/dashboard">
                    <FiLogOut size={24} color="#1e1e1e" />
                </Link>
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;