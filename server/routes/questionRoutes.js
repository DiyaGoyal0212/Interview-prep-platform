const express = require('express');
const axios = require('axios');
const router = express.Router();

// Fetch predefined questions (previous code stays unchanged)
router.get('/:role', (req, res) => {
  const role = req.params.role;
  console.log('Role:', role);  // Check if the role is passed correctly

  const questions = {
    React: ['What is JSX?', 'Explain React lifecycle methods.', 'What is the virtual DOM?', 'What is the difference between state and props?'],
    Java: ['What is Java?', 'Explain object-oriented programming in Java.', 'What is the difference between JDK, JRE, and JVM?'],
    Cpp: ['What is a pointer?', 'Explain inheritance in C++.', 'What is the difference between C and C++?', 'What is the difference between C++ and Java?'],
  };

  if (questions[role]) {
    res.json({ questions: questions[role] });
  } else {
    res.json({ questions: [] });  
  }
});

// Fetch dynamic questions from Open Trivia Database (OpenTDB)
router.post('/generate', async (req, res) => {
  const { role } = req.body;

  if (!role) {
    return res.status(400).json({ error: 'Role is required' });
  }

  // Request questions from the OpenTDB API
  try {
    console.log(`Fetching trivia questions for role: ${role}`);

    const response = await axios.get('https://opentdb.com/api.php', {
      params: {
        amount: 5,          // Limiting to 5 questions as per your request
        category: 18,       // General Knowledge category
        difficulty: 'easy', // Easy difficulty
        type: 'multiple',  // Multiple choice type
      },
    });

    // Extract questions from the OpenTDB response
    const questions = response.data.results.map((item) => item.question);

    res.json({ questions: questions });

  } catch (error) {
    console.error('Error fetching questions:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
});

module.exports = router;
