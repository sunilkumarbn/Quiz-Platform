import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'  
import Layout from './Components/Layout'
import './App.css'
import { useState } from 'react'

const App = () => {
  // 1. Initialize state with 'scores' array to avoid calculation errors
  const [quizStats, setQuizStats] = useState({
    totalCompleted: 0,
    scores: [], // We need this array to calculate the average!
    lastScore: 0
  });
  // App.jsx
const [allQuizzes, setAllQuizzes] = useState([
  { 
    id: 1,
    title: "React Basics", 
    questions: [
      { 
        question: "What is React?", 
        options: ["Library", "Framework", "Language"], 
        answer: "Library" 
      }
    ] 
  }
]);

// Function to add a new quiz to the list
const addNewQuiz = (newQuiz) => {
  setAllQuizzes([...allQuizzes, { ...newQuiz, id: Date.now() }]);
};

  // 2. Use the correct name: 'quizStats' (not 'stats')
  const average = quizStats.scores.length 
    ? (quizStats.scores.reduce((a, b) => a + b, 0) / quizStats.scores.length).toFixed(1) 
    : 0;

  // 3. Create a combined object to pass down
  const fullStats = { ...quizStats, averageScore: average };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        // Pass stats and setStats to Home so your Cards can use them
        { index: true, element: <Home stats={fullStats} setStats={setQuizStats}  onSaveQuiz={addNewQuiz} quizzes={allQuizzes} /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;