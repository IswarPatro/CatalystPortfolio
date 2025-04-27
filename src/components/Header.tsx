import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import Logo from "../assets/Logo/LOGO.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // For toggling side menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full flex flex-row justify-between sm:justify-center items-center pt-6 sticky top-0 z-50 bg-black px-4 sm:px-0 mx-auto">
      <div className="w-[200px] flex justify-start mr-10">
        <img src={Logo} alt="Logo" className="h-auto w-[200px]" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center items-center bg-gray-700 text-white px-6 py-3 rounded-full shadow-lg w-[70%]">
        <nav className="w-full flex justify-between text-md font-medium">
          <a href="#graphic-work" className="hover:text-gray-300 transition">Graphic Work</a>
          <a href="#video-production" className="hover:text-gray-300 transition">Video Production</a>
          <a href="#cgi-animation" className="hover:text-gray-300 transition">CGI Animation</a>
          <a href="#blogs" className="hover:text-gray-300 transition">Blogs</a>
          <a href="#brand-guide" className="hover:text-gray-300 transition">Brand Guide</a>
          <a href="#brochure" className="hover:text-gray-300 transition">Brochure</a>
          <a href="#logo" className="hover:text-gray-300 transition">Logo</a>
        </nav>
      </div>

      {/* Mobile Hamburger Menu Icon */}
      <div className="md:hidden flex items-center mr-4">
        <button onClick={toggleMenu} className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Side Menu (Mobile Only) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
          <div className="w-64 h-full bg-gray-800 text-white p-6 absolute right-0">
            <button onClick={toggleMenu} className="absolute top-6 right-6 text-white text-2xl mb-10">
              &times;
            </button>
            <nav className="flex flex-col space-y-4 mt-[30px]">
              <a href="#graphic-work" className="hover:text-gray-300 transition " onClick={toggleMenu}>Graphic Work</a>
              <a href="#video-production" className="hover:text-gray-300 transition" onClick={toggleMenu}>Video Production</a>
              <a href="#cgi-animation" className="hover:text-gray-300 transition" onClick={toggleMenu}>CGI Animation</a>
              <a href="#blogs" className="hover:text-gray-300 transition" onClick={toggleMenu}>Blogs</a>
              <a href="#brand-guide" className="hover:text-gray-300 transition" onClick={toggleMenu}>Brand Guide</a>
              <a href="#brochure" className="hover:text-gray-300 transition" onClick={toggleMenu}>Brochure</a>
              <a href="#logo" className="hover:text-gray-300 transition" onClick={toggleMenu}>Logo</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
