import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";
import SummaryApi from "../commonapi/index";
import ROLE from "../commonapi/role";

const Header = () => {
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);
  const [practiceDropdown, setPracticeDropdown] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    // ... (logout logic - same as before)
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolling ? "bg-opacity-70 backdrop-blur-md" : "bg-[#e6f2ff] shadow-md animate-fadeIn"
      }`}
    >
      <div className="h-16 container mx-auto flex items-center px-6 justify-between">
        <div className="text-4xl font-poppins font-bold tracking-wide text-[#66b3ff] animate-fadeIn">
          <Link to={"/"}>GetHired</Link>
        </div>

        <nav className="flex items-center gap-8">
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setPracticeDropdown(true)}
            onMouseLeave={() => setPracticeDropdown(false)}
          >
            <p className="font-semibold text-lg hover:text-[#66b3ff] transition-all animate-fadeIn">
              Practice
            </p>
            {practiceDropdown && (
              <div className="absolute top-8 left-0 bg-white shadow-lg p-3 rounded-md w-40 animate-fadeIn">
                <Link to="/cpp" className="block px-3 py-2 hover:bg-gray-200 rounded hover:text-[#66b3ff]">
                  C++
                </Link>
                <Link to="/java" className="block px-3 py-2 hover:bg-gray-200 rounded hover:text-[#66b3ff]">
                  Java
                </Link>
                <Link to="/react" className="block px-3 py-2 hover:bg-gray-200 rounded hover:text-[#66b3ff]">
                  React
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/resume"
            className="font-semibold text-lg hover:text-[#66b3ff] transition-all animate-fadeIn"
          >
            Resume
          </Link>
          <Link
            to="/pricing"
            className="font-semibold text-lg hover:text-[#66b3ff] transition-all animate-fadeIn"
          >
            Pricing
          </Link>

          <Link
            to="/InterviewOptions"  // Correct link
            className="font-semibold text-lg hover:text-[#66b3ff] transition-all animate-fadeIn"
          >
            Interview
          </Link>
        </nav>

        {/* ... (user profile and login/logout - same as before) */}
      </div>
    </header>
  );
};

export default Header;