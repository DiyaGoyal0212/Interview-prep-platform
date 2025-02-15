import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
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

  // Handle scroll effect
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
    const fetchData = await fetch(SummaryApi.Logout_user.url, {
      method: SummaryApi.Logout_user.method,
      credentials: "include",
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
    }
    if (data.error) {
      toast.error(data.message);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolling ? "bg-opacity-40 backdrop-blur-md" : "bg-white shadow-md"}`}>
      <div className="h-16 container mx-auto flex items-center px-6 justify-between">
        {/* 🔹 Logo */}
        <div className="text-3xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-blue-600 to-indigo-400 text-transparent bg-clip-text">
          <Link to={"/"}>SKILLMATE</Link>
        </div>

        {/* 🔹 Search Bar */}
        <div className="hidden lg:flex items-center w-full max-w-md border border-gray-300 rounded-full focus-within:shadow-lg px-3">
          <input type="text" placeholder="Search questions..." className="w-full outline-none px-2 py-1" />
          <div className="bg-blue-600 p-2 rounded-full text-white">
            <GrSearch />
          </div>
        </div>

        {/* 🔹 Navigation Links */}
        <nav className="flex items-center gap-8">
          {/* 📌 Practice Dropdown */}
          <div className="relative group cursor-pointer" onMouseEnter={() => setPracticeDropdown(true)} onMouseLeave={() => setPracticeDropdown(false)}>
            <p className="font-semibold text-lg text-blue-700 hover:text-blue-600">Practice</p>
            {practiceDropdown && (
              <div>
                
                {/* Role Selection Links */}
                <div className="absolute top-8 left-0 bg-white shadow-lg p-3 rounded-md w-40 animate-fadeIn">
                  <Link
                    to="/cpp"  // Navigate to /cpp page
                    className="block px-3 py-2 hover:bg-gray-200 rounded"
                  >
                    C++
                  </Link>
                  <Link
                    to="/java"  // Navigate to /java page
                    className="block px-3 py-2 hover:bg-gray-200 rounded"
                  >
                    Java
                  </Link>
                  <Link
                    to="/react"  // Navigate to /react page
                    className="block px-3 py-2 hover:bg-gray-200 rounded"
                  >
                    React
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 📌 Resume & Interview */}
          <Link to="/resume" className="font-semibold text-lg text-blue-700 hover:text-blue-600">Resume</Link>
          <Link to="/interview" className="font-semibold text-lg text-blue-700 hover:text-blue-600">Interview</Link>
        </nav>

        {/* 🔹 Profile, Cart & Authentication */}
        <div className="flex items-center gap-6">
          {/* 🔹 User Profile Dropdown */}
          {user?._id && (
            <div className="relative cursor-pointer" onClick={() => setMenuDisplay((prev) => !prev)}>
              {user?.profilePic ? (
                <img src={user?.profilePic} className="w-10 h-10 rounded-full" alt={user?.name} />
              ) : (
                <FaRegCircleUser className="text-2xl" />
              )}

              {/* Profile Dropdown Menu */}
              {menuDisplay && (
                <div className="absolute right-0 bg-white shadow-md p-3 rounded-md w-40 top-12 animate-fadeIn">
                  {user?.role === ROLE.ADMIN && (
                    <Link to={"/admin-panel"} className="block px-3 py-2 hover:bg-gray-200 rounded">Admin Panel</Link>
                  )}
                  <button onClick={handleLogout} className="block w-full text-left px-3 py-2 hover:bg-red-200 text-red-600 rounded">
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* 🔹 Login / Logout */}
          {!user?._id && (
            <Link to={"/login"} className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-400 transition">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
