import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TextInterview = () => {
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [userAnswer, setUserAnswer] = useState("");
    const [interviewHistory, setInterviewHistory] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [interviewEnded, setInterviewEnded] = useState(false);
    const [review, setReview] = useState("");
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const [availableQuestions, setAvailableQuestions] = useState([]);

    const javaQuestions = [
        "What is the difference between `==` and `equals()` in Java?",
        "Explain the concept of inheritance in Java.",
        "What are the four pillars of OOP?",
        "What is polymorphism?",
        "Explain the difference between interface and abstract class",
        "What are exceptions in Java? How do you handle them?",
        "Explain the concept of multithreading in Java.",
        "What are collections in Java?",
        "Describe the difference between ArrayList and LinkedList.",
        "What are generics in Java?",
    ];

    const cppQuestions = [
        "What is the difference between `struct` and `class` in C++?",
        "Explain the concept of pointers in C++.",
        "What are virtual functions in C++?",
        "What is operator overloading in C++?",
        "Explain the concept of templates in C++.",
        "What are the different types of inheritance in C++?",
        "What are exceptions in C++? How do you handle them?",
        "Explain the difference between new and malloc.",
        "What are smart pointers in C++?",
        "What is RAII (Resource Acquisition Is Initialization)?",
    ];

    const pythonQuestions = [
        "What are the different data types in Python?",
        "Explain the concept of list comprehensions in Python.",
        "What are decorators in Python?",
        "What is the difference between lists and tuples?",
        "Explain the concept of dictionaries in Python.",
        "What are lambda functions in Python?",
        "What are generators in Python?",
        "Explain the concept of inheritance in Python.",
        "What are modules and packages in Python?",
        "What is the difference between shallow copy and deep copy?",
    ];

    const topics = [
        { id: "java", name: "Java Interview", questions: javaQuestions },
        { id: "cpp", name: "C++ Interview", questions: cppQuestions },
        { id: "python", name: "Python Interview", questions: pythonQuestions },
    ];

    useEffect(() => {
        if (selectedTopic) {
            const selectedTopicQuestions = topics.find(topic => topic.id === selectedTopic).questions;
            const shuffledQuestions = [...selectedTopicQuestions].sort(() => Math.random() - 0.5);
            setAvailableQuestions(shuffledQuestions);
            setCurrentQuestion(shuffledQuestions[0]); // Set initial question
        }
    }, [selectedTopic]);

    const handleTopicSelect = (topicId) => {
        setSelectedTopic(topicId);
        setQuestionIndex(0);
        setInterviewHistory([]);
        setCorrectAnswers(0);
        setIncorrectAnswers(0);
        setInterviewEnded(false);
        setReview("");
        setUserAnswer("");
    };

    const handleAnswerChange = (e) => {
        setUserAnswer(e.target.value);
    };

    const handleNextQuestion = () => {
        const isCorrect = checkAnswer(currentQuestion, userAnswer);
        setInterviewHistory([...interviewHistory, { question: currentQuestion, answer: userAnswer, correct: isCorrect }]);
        setUserAnswer("");

        if (isCorrect) {
            setCorrectAnswers(correctAnswers + 1);
        } else {
            setIncorrectAnswers(incorrectAnswers + 1);
        }

        if (questionIndex < availableQuestions.length - 1) {
            setQuestionIndex(questionIndex + 1);
            setCurrentQuestion(availableQuestions[questionIndex + 1]);
        } else {
            setInterviewEnded(true);
            generateReview();
        }
    };

    const handleSkipQuestion = () => {
        setInterviewHistory([...interviewHistory, { question: currentQuestion, answer: "Skipped", correct: false }]);
        setUserAnswer("");
        setIncorrectAnswers(incorrectAnswers + 1);

        if (questionIndex < availableQuestions.length - 1) {
            setQuestionIndex(questionIndex + 1);
            setCurrentQuestion(availableQuestions[questionIndex + 1]);
        } else {
            setInterviewEnded(true);
            generateReview();
        }
    };

    const checkAnswer = (question, answer) => {
        // Replace with your actual answer checking logic
        // This is a placeholder
        return false;
    };

    const generateReview = () => {
        let reviewText = "Interview Review:\n";
        let areasOfImprovement = [];

        interviewHistory.forEach((item) => {
            reviewText += `Question: ${item.question}\n`;
            reviewText += `Answer: ${item.answer}\n`;
            reviewText += `Correct: ${item.correct ? "Yes" : "No"}\n\n`;

            if (!item.correct && item.answer !== "Skipped") { // Don't include skipped questions
                areasOfImprovement.push(item.question);
            }
        });

        reviewText += `\nCorrect Answers: ${correctAnswers}\n`;
        reviewText += `Incorrect Answers: ${incorrectAnswers}\n`;

        reviewText += "\nAreas of Improvement:\n";
        if (areasOfImprovement.length > 0) {
            areasOfImprovement.forEach((area) => {
                reviewText += `- ${area}\n`;
            });
        } else {
            reviewText += "No areas of improvement found";
        }

        setReview(reviewText);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-4">Text-Based Interview</h2>

                {!selectedTopic ? (
                    <div>
                        <h2>Select a Topic</h2>
                        <div className="flex space-x-4">
                            {topics.map((topic) => (
                                <button
                                    key={topic.id}
                                    className="bg-[#66b3ff] text-white px-6 py-3 rounded-lg hover:bg-[#5299e6] transition-all"
                                    onClick={() => handleTopicSelect(topic.id)}
                                >
                                    {topic.name}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : !interviewEnded ? (
                    <div>
                        <p className="font-semibold">{currentQuestion}</p>
                        <textarea
                            className="w-full h-24 border rounded p-2 mt-4"
                            value={userAnswer}
                            onChange={handleAnswerChange}
                        />
                        <div className="mt-4 flex space-x-4">
                            <button
                                className="bg-[#66b3ff] text-white px-6 py-3 rounded-lg hover:bg-[#5299e6] transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
                                onClick={handleNextQuestion}
                                disabled={!userAnswer}
                            >
                                Next Question
                            </button>
                            <button
                                className="bg-gray-400 text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition-all"
                                onClick={handleSkipQuestion}
                            >
                                Skip Question
                            </button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <pre className="whitespace-pre-wrap">{review}</pre>
                        <Link
                            to="/"
                            className="mt-6 bg-[#66b3ff] text-white px-6 py-3 rounded-lg hover:bg-[#5299e6] transition-all block mx-auto"
                        >
                            Return to Home
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TextInterview;