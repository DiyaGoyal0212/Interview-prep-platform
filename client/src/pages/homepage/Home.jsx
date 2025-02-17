import React from "react";
import { Link } from "react-router-dom";
import interview from "../../assets/main.jpeg"; // Make sure this image exists

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-teal-600 to-teal-400 text-white">

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center flex-grow p-10 bg-opacity-90">
        <div className="w-full md:w-1/2 flex justify-center ">
          <img src={interview} alt="Online Exam" className="w-3/4 rounded-b-md mt-20" />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold text-white leading-tight">
            Welcome to <span className="text-teal-200">Prepify</span>
          </h1>
          <p className="mt-4 text-gray-100">
            Ace Your Next Interview with Confidence – Learn, Practice, Succeed!
          </p>
          <button className="mt-6 bg-white text-teal-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100">
            Get started now!
          </button>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-teal-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">About Prepify</h2>
          <p className="text-lg text-gray-200 mb-8">
            Prepify is your go-to platform for preparing for interviews. Whether you're a beginner or an experienced professional, we offer tools, resources, and mock interviews to help you excel.
          </p>
          <Link to="/about" className="text-teal-200 text-lg font-semibold hover:underline">
            Learn more about us
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-teal-600 mb-12">Why Choose Prepify?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <i className="fas fa-laptop-code text-4xl text-teal-600 mb-4"></i>
              <h3 className="text-2xl font-semibold text-teal-600 mb-2">Interactive Mock Interviews</h3>
              <p className="text-gray-600">Practice interviews in a real-time simulated environment and get instant feedback.</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-graduation-cap text-4xl text-teal-600 mb-4"></i>
              <h3 className="text-2xl font-semibold text-teal-600 mb-2">Expert Resources</h3>
              <p className="text-gray-600">Access to expert-written guides, tips, and study materials to help you prepare effectively.</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-clipboard-check text-4xl text-teal-600 mb-4"></i>
              <h3 className="text-2xl font-semibold text-teal-600 mb-2">Track Your Progress</h3>
              <p className="text-gray-600">Keep track of your interview preparation journey and improve over time.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="bg-teal-900 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-lg text-gray-300 mb-8">
            Have questions or need assistance? Our team is here to help. Get in touch with us!
          </p>
          <Link to="/contact" className="text-teal-200 text-lg font-semibold hover:underline">
            Contact Support
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
