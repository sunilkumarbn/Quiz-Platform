import React, { useState } from "react";
// Inside QuestionCard.jsx

const QuestionCard = ({ questions, stats, setStats,onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [localScore, setLocalScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    let newScore = localScore;
    
    // 1. Check if the answer is correct
    if (selectedOption === questions[currentIndex].answer) {
      newScore = localScore + 1;
      setLocalScore(newScore);
    }

    const nextIndex = currentIndex + 1;

    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
    } else {
      // 2. QUIZ FINISHED: Update the Global State!
      const percentage = (newScore / questions.length) * 100;
      
      setStats((prev) => ({
        ...prev,
        totalCompleted: prev.totalCompleted + 1,
        scores: [...prev.scores, percentage], // Add new score to the array
        lastScore: percentage,
        bestScore: Math.max(prev.bestScore || 0, percentage)
      }));
      
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <div className="score-screen">
        <h2>Results: {localScore}/{questions.length}</h2>
        <button onClick={onClose}>Back to Dashboard</button>
      </div>
    );
  }

  return (
    <div className="question-card">
      <h3>{questions[currentIndex].question}</h3>
      <div className="options">
        {questions[currentIndex].options.map((opt, i) => (
          <button key={i} onClick={() => handleAnswerClick(opt)}>{opt}</button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;