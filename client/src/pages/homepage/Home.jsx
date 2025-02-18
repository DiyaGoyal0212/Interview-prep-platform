import React from "react";
import { Link } from "react-router-dom";
import interview from "../../assets/intervi.gif"; // Make sure this path is correct
import Slider from "react-slick";
// import Footer from "../../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images directly (RECOMMENDED):
import uni1 from "../../assets/uni1.jpg"; // Correct paths and extensions
import uni2 from "../../assets/uni2.jpg";
import uni3 from "../../assets/uni3.png";
import uni4 from "../../assets/uni4.png";
import uni5 from "../../assets/uni5.png";
import uni6 from "../../assets/uni6.png";
import uni7 from "../../assets/uni7.png";
import WhyChooseUs from "./WhyChooseUs";
// ... import other images as needed

const Home = () => {
  const universityLogos = [uni1, uni2, uni3, uni4, uni5, uni6, uni7]; // Use imported images

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-r from-[#e6f2ff] to-[#f0f5ff] text-gray-800 font-poppins flex flex-col items-center pt-16">
      <div className="flex flex-col md:flex-row items-center justify-center w-full px-10 bg-opacity-80 animate-fadeIn">
        <div className="w-full md:w-1/2 text-center md:text-left pr-10">
          <h1 className="text-5xl font-bold leading-tight mb-4 animate-fadeIn">
            Unlock Your Career Potential with <span className="text-[#66b3ff]">GetHired</span>
          </h1>
          <p className="mt-4 text-lg animate-fadeIn">
            Master the art of interviewing. Gain the confidence and skills you need to land your dream job. Practice, learn, and succeed with InterviewAce.
          </p>
          <Link to="/signup">
            <button className="mt-6 bg-[#66b3ff] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#5299e6] transition-all animate-fadeIn font-poppins">
              Try For Free
            </button>
          </Link>

          <div className="mt-12 animate-fadeIn">
            <h2 className="text-1.5xl font-bold mb-6">
              Trusted by Students & Professionals from
            </h2>
            <Slider {...slickSettings}>
              {universityLogos.map((logo, index) => (
                <div key={index} className="px-4">
                  <img
                    src={logo} // Use the imported image directly
                    alt={`University Logo ${index + 1}`}
                    className="h-20 w-auto mx-auto"
                    onError={(e) => {
                      console.error(`Error loading image:`, logo, e); // Log the actual image variable
                      e.target.onerror = null;
                      e.target.src = "../../assets/placeholder.png"; // Use a placeholder (relative to Home.jsx)
                    }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center pl-10">
          <img
            src={interview}
            alt="Interview Preparation"
            className="w-3/4 rounded-md mt-20 md:mt-0 animate-fadeIn"
            onError={(e) => {
              console.error(`Error loading interview image:`, interview, e);
              e.target.onerror = null;
              e.target.src = "../../assets/placeholder.png"; // Placeholder path
            }}
          />
        </div>
      </div>
    </div>
    <WhyChooseUs/>
    {/* <Footer/> */}
    </>
  );
};

export default Home;