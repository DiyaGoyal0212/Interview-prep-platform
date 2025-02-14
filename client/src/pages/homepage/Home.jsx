import React from "react";
import { Link } from "react-router-dom";
import interview from "../../assets/interview.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-800 to-blue-400 text-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center flex-grow p-10">
        <div className="w-full md:w-1/2 flex justify-center ">
          <img src={interview} alt="Online Exam" className="w-3/4 rounded-b-full mt-20" />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-white">INTERVIEW <span className="text-blue-200">PREPARATION</span></h1>
          <p className="mt-4 text-gray-200">
          Ace Your Next Interview with Confidence – Learn, Practice, Succeed!
          </p>
          <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100">
            Get started now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
