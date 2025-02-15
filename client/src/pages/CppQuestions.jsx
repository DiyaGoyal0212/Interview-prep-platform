import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CppQuestionsPage = () => {
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    try {
      // Make the API call to get questions
      const result = await axios.get(`http://localhost:8080/api/questions/Cpp`);
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
  useEffect(() => {
    fetchQuestions();  // Call the function when the component mounts
  }, []);  // Empty dependency array to call once
    
  
  return (
    <div className="mt-24 px-6 py-4 bg-gray-50">
  <h1 className="text-3xl font-bold text-gray-800 mb-6">React Interview Questions</h1>
  <ul className="space-y-4">
    {questions.map((question, index) => (
      <li key={index} className="p-4 bg-white rounded-lg shadow-md hover:bg-gray-100 cursor-pointer">
        {question}
      </li>
    ))}
  </ul>
</div>

  );
};
export default CppQuestionsPage;
