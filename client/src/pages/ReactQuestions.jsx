import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReactQuestionsPage = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);  // To manage loading state
  const [role, setRole] = useState('React');  // Set a default role

  const fetchQuestions = async () => {
    try {
      // Make the API call to get questions
      const result = await axios.get(`http://localhost:8080/api/questions/React`);
      console.log('API response:', result.data);  // Logging the response data
  
      // Check if 'result.data.questions' exists and is an array
      if (result.data && Array.isArray(result.data.questions)) {
        setQuestions(result.data.questions);  // Set questions if available
      } else {
        console.error('No questions field in response:', result.data);
        setQuestions([]);  // Set an empty array if questions are not available
      }
    } catch (error) {
      console.error('Error fetching/generating questions:', error);
      setQuestions([]);  // Set an empty array in case of error
    }
  };

  const generateQuestions = async () => {
    setLoading(true);  // Start loading
    try {
      const response = await axios.post('http://localhost:8080/api/questions/generate', { role });
      console.log('Generated Questions:', response.data.questions);
      setQuestions(response.data.questions);
    } catch (error) {
      console.error('Error generating questions:', error);
      if (error.response) {
        console.error('Backend response error:', error.response.data);
      } else {
        console.error('Error details:', error.message);
      }
      setQuestions([]);  // Set an empty array in case of error
    } finally {
      setLoading(false);  // End loading
    }
  };
  

  useEffect(() => {
    fetchQuestions();  // Call the function when the component mounts
  }, []);  // Empty dependency array to call once

  return (
    <div className="mt-24 px-6 py-4 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">React Interview Questions</h1>
      
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
