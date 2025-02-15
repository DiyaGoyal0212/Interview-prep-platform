const express = require('express');
const Question = require('../models/Question');
const axios = require('axios');
const router = express.Router();

// Fetch predefined questions
// Express.js backend example



router.get('/:role', (req, res) => {
  const role = req.params.role;
  console.log('Role:', role);  // Check if the role is passed correctly

  // Example of predefined questions for React
  const questions = {
    React: ['What is JSX?', 'Explain React lifecycle methods.', 'What is the virtual DOM?','What is the difference between state and props?'],
    Java: ['What is Java?', 'Explain object-oriented programming in Java.', 'What is the difference between JDK, JRE, and JVM?'],
    Cpp: ['What is a pointer?', 'Explain inheritance in C++.','What is the difference between C and C++?', 'What is the difference between C++ and Java?'],
  };

  if (questions[role]) {
    res.json({ questions: questions[role] });
  } else {
    res.json({ questions: [] });  
  }
});


  

// Generate dynamic questions using OpenAI API
// Define the route handler as async
router.post('/generate', async (req, res) => {
  const { role } = req.body;

  if (!role) {
    return res.status(400).json({ error: 'Role is required' });
  }

  const prompt = `Generate unique interview questions for the role of ${role}`;

  try {
    console.log(`Generating questions for role: ${role}`);
    console.log('Request Body:', req.body);
    
    // Make the request to OpenAI
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    console.log('OpenAI API response:', response.data);

    const questions = response.data.choices[0].text.split('\n').map(q => q.trim()).filter(q => q);
    res.json({ questions });

  } catch (error) {
    console.error('Error generating questions:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to generate questions' });
  }
});



module.exports = router;
