import React, { useState } from "react";
import "./Card.css";
import QuestionCard from "./QuestionCard";
import NewQuiz from "./NewQuiz";
import ProgressTracker from "./ProgressTracker";

const Card = ({ title, description, type, stats, setStats }) => {
  const [isStarted, setIsStarted] = useState(false);

  // Define your class based on state
  const cardClass = isStarted ? "card card-fullscreen" : "card";

  const quizQuestions = [
    { question: "What is React?", options: ["Library", "Framework", "Language"], answer: "Library" },
    { question: "What is JSX?", options: ["JavaScript", "HTML", "Syntax Extension"], answer: "Syntax Extension" },
    { question: "What is a component?", options: ["Function", "Class", "Reusable Piece of UI"], answer: "Reusable Piece of UI" },
  ];

  return (
    <div className={cardClass}>
      {!isStarted ? (
        // Standard View (Small Card)
        <>
          <h3>{title}</h3>
          <p>{description}</p>
          <button onClick={() => setIsStarted(true)}>Get Started</button>
        </>
      ) : (
        // Expanded View (Full Screen)
        <div className="fullscreen-content">
          <button className="close-btn" onClick={() => setIsStarted(false)}>✕ Close</button>
          
          {type === "take" && (
            <QuestionCard 
              stats={stats} 
              setStats={setStats} 
              questions={quizQuestions} 
              onClose={() => setIsStarted(false)} 
            />
          )}
          {type === "create" && <NewQuiz />}
          {type === "progress" && <ProgressTracker stats={stats} />}
        </div>
      )}
    </div>
  );
};

export default Card;