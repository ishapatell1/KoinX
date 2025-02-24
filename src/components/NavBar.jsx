import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-20 top-0 left-0 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/koinXlogo.svg" className="h-8" alt="KoinX Logo" />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 font-medium">
            <li>
              <Link
                to="/crypto-taxes"
                className="block py-2 px-3 text-base hover:text-blue-700  text-[#3E424A]-600"
              >
                Crypto Taxes
              </Link>
            </li>
            <li>
              <Link
                to="/free-tools"
                className="block py-2 px-3 text-base hover:text-blue-700  text-[#3E424A]-600"
              >
                Free Tools
              </Link>
            </li>
            <li>
              <Link
                to="/resource-center"
                className="block py-2 px-3 text-base hover:text-blue-700  text-[#3E424A]-600"
              >
                Resource Center
              </Link>
            </li>
          </ul>

          {/* Get Started Button */}
          <button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] text-white px-4 py-2 rounded-lg mt-4 md:mt-0 font-semibold">
  Get Started
</button>
        </div>
      </div>
    </nav>
  );
};