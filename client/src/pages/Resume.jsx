import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";

const Resume = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [atsScore, setAtsScore] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      setResumeFile(file);
      analyzeResume(file);
    }
  };

  const analyzeResume = (file) => {
    // Simulating ATS Score and Suggestions (Replace with real API logic)
    const randomScore = Math.floor(Math.random() * 50) + 50; // Random score between 50-100
    setAtsScore(randomScore);

    const sampleSuggestions = [
      "Use more industry-relevant keywords.",
      "Optimize formatting for ATS readability.",
      "Include measurable achievements in work experience.",
      "Ensure a professional summary at the top.",
      "Add more action verbs to describe skills."
    ];
    setSuggestions(sampleSuggestions);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 to-blue-400 text-white flex flex-col items-center justify-center p-6 pt-16">
      <h1 className="text-4xl font-bold">Resume Analyzer</h1>
      <p className="mt-2 text-gray-200">Upload your resume and get an ATS Score along with improvement suggestions.</p>

      {/* Upload Section */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md text-center text-blue-800">
        <label
          className="cursor-pointer flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500"
        >
          <FaUpload />
          Upload Resume
          <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFileUpload} />
        </label>

        {resumeFile && (
          <p className="mt-2 text-gray-600">Uploaded: {resumeFile.name}</p>
        )}
      </div>

      {/* ATS Score Section */}
      {atsScore !== null && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md text-center text-blue-800 w-96">
          <h2 className="text-2xl font-bold">ATS Score: {atsScore}/100</h2>
          <p className="text-gray-600">Higher score means better chances of passing ATS filters.</p>
        </div>
      )}

      {/* Improvement Suggestions */}
      {suggestions.length > 0 && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md text-blue-800 w-96">
          <h3 className="text-xl font-bold">How to Improve:</h3>
          <ul className="mt-2 text-gray-600 list-disc list-inside">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="mt-1">{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Resume;

