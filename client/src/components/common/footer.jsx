import { Mail, Copy, ArrowRight } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-primary_nav text-white py-12 md:py-16 font-poppins px-6 sm:px-10 lg:px-20">
      {/* ===== Top Section ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 mb-12">
        {/* === Contact Section === */}
        <div>
          <p className="text-xs md:text-sm text-primary uppercase mb-2">
            Contact Us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-6">
            Let’s Discuss Your <br className="hidden sm:block" /> Vision. With Us
          </h2>
          <button className="bg-white text-black px-5 py-2.5 sm:px-6 sm:py-3 rounded-full flex items-center gap-2 text-sm sm:text-base font-medium hover:bg-primary transition">
            Schedule a call now <ArrowRight size={18} />
          </button>

          <p className="text-xs md:text-sm text-primary uppercase mt-8 mb-2">
            Or email us at
          </p>
          <div className="bg-gray-800 text-white px-4 py-2 rounded-full flex items-center justify-between w-full sm:w-max space-x-3">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span className="text-xs sm:text-sm truncate">
                rooted2025stem@gmail.com
              </span>
            </div>
            <Copy size={14} className="cursor-pointer shrink-0" />
          </div>
        </div>

        {/* === Quick Links === */}
        <div className="text-sm sm:text-base">
          <p className="text-primary uppercase mb-2 text-xs md:text-sm">
            Quick Links
          </p>
          <ul className="space-y-2 sm:space-y-3 text-white">
            <li
              onClick={() => navigate("/main/home")}
              className="cursor-pointer hover:text-gray-300"
            >
              Home
            </li>
            <li
              onClick={() => navigate("/main/about")}
              className="cursor-pointer hover:text-gray-300"
            >
              About
            </li>
            <li
              onClick={() => navigate("/main/courses")}
              className="cursor-pointer hover:text-gray-300"
            >
              Courses
            </li>
            <li
              onClick={() => navigate("/main/events")}
              className="cursor-pointer hover:text-gray-300"
            >
              Events
            </li>
            <li
              onClick={() => navigate("/main/contact")}
              className="cursor-pointer hover:text-gray-300"
            >
              contact
            </li>
          </ul>
        </div>

        {/* === Information === */}
        <div className="text-sm sm:text-base">
          <p className="text-primary uppercase mb-2 text-xs md:text-sm">
            Information
          </p>
          <ul className="space-y-2 sm:space-y-3 text-white">
            <li className="hover:text-gray-300 cursor-pointer">
              Terms of Service
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              Cookies Settings
            </li>
          </ul>
        </div>
      </div>

      {/* ===== Bottom Section ===== */}
      <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <p className="text-[10px] sm:text-xs text-gray-500 text-center sm:text-left">
          &copy; 2025. ALL RIGHTS RESERVED.
        </p>
        <div className="flex space-x-4 text-white">
          <FaFacebookF className="cursor-pointer hover:text-gray-400 transition" />
          <FaTwitter className="cursor-pointer hover:text-gray-400 transition" />
          <FaInstagram className="cursor-pointer hover:text-gray-400 transition" />
          <FaLinkedinIn className="cursor-pointer hover:text-gray-400 transition" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
