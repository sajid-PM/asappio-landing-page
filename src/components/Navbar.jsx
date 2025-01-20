import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 bg-[#1C2128] px-4 py-4 md:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="" className="text-2xl font-bold text-white cursor-pointer">
          Asappio
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden rounded-lg p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none cursor-pointer transition-all duration-300 ease-in-out"
        >
          <span className="sr-only">Open menu</span>
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <a
            href="https://app.asappio.com/login"
            className="rounded-md bg-[#E84E4E] px-4 py-2 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 cursor-pointer transition-all duration-300 ease-in-out"
          >
            Login
          </a>
          <a
            href="https://app.asappio.com/register"
            className="rounded-md bg-[#27C345] px-4 py-2 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 cursor-pointer transition-all duration-300 ease-in-out"
          >
            Admin Signup
          </a>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-16 z-50 bg-[#1C2128] p-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <a
                href="https://app.asappio.com/login"
                className="w-full rounded-md bg-[#E84E4E] px-4 py-2 text-center text-sm font-medium text-white hover:bg-slate-700 cursor-pointer transition-all duration-300 ease-in-out"
              >
                Login
              </a>
              <a
                href="https://app.asappio.com/register"
                className="w-full rounded-md bg-[#27C345] px-4 py-2 text-center text-sm font-medium text-white hover:bg-slate-700 cursor-pointer transition-all duration-300 ease-in-out"
              >
                Admin Signup
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;