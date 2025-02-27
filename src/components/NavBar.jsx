import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-10 top-0 left-0 shadow-md">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        
        {/* Logo on the Left */}
        <Link to="/" className="flex items-center">
          <img src="/koinXlogo.svg" className="h-8" alt="KoinX Logo" />
        </Link>

        {/* Desktop Navigation on the Right */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <Link to="/crypto-taxes" className="text-base text-[#3E424A] hover:text-blue-700">
            Crypto Taxes
          </Link>
          <Link to="/free-tools" className="text-base text-[#3E424A] hover:text-blue-700">
            Free Tools
          </Link>
          <Link to="/resource-center" className="text-base text-[#3E424A] hover:text-blue-700">
            Resource Center
          </Link>

          {/* Get Started Button */}
          <button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] text-white px-4 py-2 rounded-lg font-semibold">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center p-2 text-gray-500 hover:bg-gray-100 rounded-lg focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-white border-t border-gray-200 p-4`}>
        <Link to="/crypto-taxes" className="block py-2 text-base text-[#3E424A] hover:text-blue-700">
          Crypto Taxes
        </Link>
        <Link to="/free-tools" className="block py-2 text-base text-[#3E424A] hover:text-blue-700">
          Free Tools
        </Link>
        <Link to="/resource-center" className="block py-2 text-base text-[#3E424A] hover:text-blue-700">
          Resource Center
        </Link>

        {/* Mobile Get Started Button */}
        <button className="w-full bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] text-white px-4 py-2 rounded-lg font-semibold mt-4">
          Get Started
        </button>
      </div>
    </nav>
  );
};