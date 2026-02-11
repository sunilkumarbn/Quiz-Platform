import React, { useState } from "react";
import "./Card.css";
import QuestionCard from "./QuestionCard";
import NewQuiz from "./NewQuiz";
import ProgressTracker from "./ProgressTracker";

// 1. Add 'allQuizzes' to the props received from Home.jsx
const Card = ({ title, description, type, stats, setStats, onSave, allQuizzes }) => { 
  const [isStarted, setIsStarted] = useState(false);
  const cardClass = isStarted ? "card card-fullscreen" : "card";

  return (
    <div className={cardClass}>
      {!isStarted ? (
        <>
          <h3>{title}</h3>
          <p>{description}</p>
          <button onClick={() => setIsStarted(true)}>Get Started</button>
        </>
      ) : (
        <div className="fullscreen-content">
          <button className="close-btn" onClick={() => setIsStarted(false)}>✕ Close</button>
          
          {type === "take" && (
            <QuestionCard 
              stats={stats} 
              setStats={setStats} 
              quizList={allQuizzes} // 2. This now matches the updated QuestionCard logic
              onClose={() => setIsStarted(false)} 
            />
          )}
          
          {type === "create" && (
            <NewQuiz 
              onSave={onSave} 
              onClose={() => setIsStarted(false)} 
            />
          )}

          {type === "progress" && <ProgressTracker stats={stats} />}
        </div>
      )}
    </div>
  );
};

export default Card;