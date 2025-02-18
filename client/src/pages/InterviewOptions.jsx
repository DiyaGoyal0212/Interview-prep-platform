import React from "react";
import { Link } from "react-router-dom";

const InterviewOptions = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">Choose Interview Type</h2>
        <div className="flex flex-col space-y-4">
          <Link to="/text-interview" className="bg-[#66b3ff] text-white px-6 py-3 rounded-lg hover:bg-[#5299e6] transition-all">
            Text-Based Interview
          </Link>
          <Link to="/audio-video-interview" className="bg-[#66b3ff] text-white px-6 py-3 rounded-lg hover:bg-[#5299e6] transition-all">
            Audio/Video-Based Interview (Coming Soon)
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InterviewOptions;