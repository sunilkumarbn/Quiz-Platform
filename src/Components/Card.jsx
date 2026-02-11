import React, { useState } from "react";
import "./Card.css";
import QuestionCard from "./QuestionCard";
import NewQuiz from "./NewQuiz";
import ProgressTracker from "./ProgressTracker";
const Card = ({ title, description, type,  stats, setStats  }) => {
  const [isStarted, setIsStarted] = useState(false);

  // Sample data to pass down
  const quizQuestions = [
    { question: "What is React?", options: ["Library", "Framework","Language"], answer: "Library" },
    { question: "What is JSX?", options: ["JavaScript", "HTML", "Syntax Extension"], answer: "Syntax Extension" },
    { question: "What is a component?", options: ["Function", "Class", "Reusable Piece of UI"], answer: "Reusable Piece of UI" },
  ];

  // 2. If started, show the QuestionCard instead of the intro
 if (isStarted) {
    // Pass the questions as a prop!
    if (type === "create") return <NewQuiz />;
    if (type === "take") return <QuestionCard stats={stats} setStats={setStats} questions={quizQuestions} onClose={() => setIsStarted(false)}  />;
    if (type === "progress") return <ProgressTracker stats={stats} />;
  }

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      {/* 3. Update state on click */}
      <button onClick={() => setIsStarted(true)}> {type === "create" ? "Create Now" : "View Now"}</button>
    </div>
  );
};

export default Card;