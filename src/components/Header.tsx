// import { Sparkles } from 'lucide-react';
import Logo from "../assets/Logo/LOGO.png";

const Header = () => {
  return (
    <header className="w-full flex flex-row justify-center pt-6 items-center sticky top-0 z-50 bg-black">
      <div className="w-[200px] flex justify-start space-x-8 mr-10">
        <img src={Logo} alt="Logo" className="h-auto w-[200px]" />
      </div>

      <div className="flex items-center justify-between bg-gray-700 text-white px-6 py-3 rounded-full shadow-lg w-[70%] max-w-7xl">
        {/* Logo */}
        {/* <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-10 w-32" />
        </div> */}

        {/* Nav Links */}
        <nav className="hidden w-full md:flex justify-between text-md font-medium">
          <a href="#graphic-work" className="hover:text-gray-300 transition">
            Graphic Work
          </a>
          <a
            href="#video-production"
            className="hover:text-gray-300 transition"
          >
            Video Production
          </a>
          <a href="#cgi-animation" className="hover:text-gray-300 transition">
            CGI Animation
          </a>
          {/* <a href="#website" className="hover:text-gray-300 transition">
            Website
          </a> */}
          <a href="#blogs" className="hover:text-gray-300 transition">
            Blogs
          </a>
          <a href="#brand-guide" className="hover:text-gray-300 transition">
            Brand Guide
          </a>
          <a href="#brochure" className="hover:text-gray-300 transition">
            Brochure
          </a>
          <a href="#logo" className="hover:text-gray-300 transition">
            Logo
          </a>
        </nav>

        {/* Call-to-action Button */}
        {/* <button className="flex items-center bg-[#1c1c1c] border border-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-[#2a2a2a] transition">
          <Sparkles className="w-4 h-4 mr-2" />
          Get for Free
        </button> */}
      </div>
    </header>
  );
};

export default Header;
