import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReactQuestionsPage = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);  // To manage loading state
  const [role, setRole] = useState('React');  // Default role

  // Function to fetch predefined questions
  const fetchQuestions = async () => {
    try {
      // Make the API call to get questions for a predefined role (e.g., React)
      const result = await axios.get(`http://localhost:8080/api/questions/${role}`);
      console.log('Predefined questions:', result.data);
      setQuestions(result.data.questions);
    } catch (error) {
      console.error('Error fetching questions:', error);
      setQuestions([]);
    }
  };

  // Function to generate dynamic questions using QuizAPI
  const generateQuestions = async () => {
    setLoading(true);  // Start loading
    try {
      // Send a POST request to the backend with the role to generate new questions
      const response = await axios.post('http://localhost:8080/api/questions/generate', { role });
      console.log('Generated Questions:', response.data.questions);
      setQuestions(response.data.questions);
    } catch (error) {
      console.error('Error generating questions:', error);
      if (error.response) {
        console.error('Backend response error:', error.response.data);
        alert(`Error: ${error.response.data.error || 'Failed to generate questions'}`);
      } else {
        console.error('Error details:', error.message);
        alert('Error: Failed to connect to the server');
      }
    } finally {
      setLoading(false);  // End loading
    }
  };

  useEffect(() => {
    fetchQuestions();  // Fetch predefined questions for the default role when component mounts
  }, [role]);  // Fetch questions when role changes

  return (
    <div className="mt-24 px-6 py-4 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Interview Questions for {role}</h1>

      {/* Role Input */}
      <div className="mb-6">
        <label htmlFor="role" className="block text-sm font-medium text-gray-700">Select Role:</label>
        <input
          type="text"
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}  // Set role based on user input
          className="mt-1 p-2 border border-gray-300 rounded-lg"
          placeholder="Enter role (e.g., React)"
        />
      </div>

      {/* Display the list of questions */}
      <ul className="space-y-4">
        {questions.map((question, index) => (
          <li key={index} className="p-4 bg-white rounded-lg shadow-md hover:bg-gray-100 cursor-pointer">
            {question}
          </li>
        ))}
      </ul>

      {/* Button to generate new questions */}
      <button
        onClick={generateQuestions}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate New Questions'}
      </button>
    </div>
  );
};

export default ReactQuestionsPage;
