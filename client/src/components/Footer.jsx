// Footer.jsx (Create this file in the same directory as Header.jsx, e.g., src/components/Footer/Footer.jsx)

import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6 px-6"> {/* Dark background, white text */}
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-between items-center"> {/* Flexbox for layout */}
          <div className="text-lg font-semibold mb-4 md:mb-0"> {/* Margin bottom for smaller screens */}
            &copy; {currentYear} GetHired. All rights reserved.
          </div>
          <div className="flex space-x-6"> {/* Social media links */}
            <a href="#" className="hover:text-[#66b3ff] transition-colors"> {/* Lighter blue hover */}
              <i className="fab fa-facebook-f text-2xl"></i> {/* Facebook icon */}
            </a>
            <a href="#" className="hover:text-[#66b3ff] transition-colors">
              <i className="fab fa-twitter text-2xl"></i> {/* Twitter icon */}
            </a>
            <a href="#" className="hover:text-[#66b3ff] transition-colors">
              <i className="fab fa-instagram text-2xl"></i> {/* Instagram icon */}
            </a>
            <a href="#" className="hover:text-[#66b3ff] transition-colors">
              <i className="fab fa-linkedin-in text-2xl"></i> {/* LinkedIn icon */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;