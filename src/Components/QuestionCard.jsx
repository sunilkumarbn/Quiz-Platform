import React, { useState } from "react";

const QuestionCard = ({ quizList, stats, setStats, onClose }) => {
  // NEW: State to track which quiz is currently active
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [localScore, setLocalScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // 1. SCREEN: Selection Menu (Shown if no quiz is selected)
  if (!selectedQuiz) {
    return (
      <div className="quiz-selector">
        <h2>Choose a Quiz</h2>
        <div className="quiz-list-menu" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {quizList.map((quiz) => (
            <button 
              key={quiz.id} 
              className="quiz-option-btn"
              onClick={() => setSelectedQuiz(quiz)}
            >
              {quiz.title} — ({quiz.questions.length} Questions)
            </button>
          ))}
        </div>
        {quizList.length === 0 && <p>No quizzes found. Go create one!</p>}
      </div>
    );
  }

  // Define questions based on the selected quiz
  const questions = selectedQuiz.questions;

  const handleAnswerClick = (selectedOption) => {
    let newScore = localScore;
    
    if (selectedOption === questions[currentIndex].answer) {
      newScore = localScore + 1;
      setLocalScore(newScore);
    }

    const nextIndex = currentIndex + 1;

    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
    } else {
      const percentage = (newScore / questions.length) * 100;
      
      setStats((prev) => ({
        ...prev,
        totalCompleted: prev.totalCompleted + 1,
        scores: [...prev.scores, percentage],
        lastScore: percentage,
        bestScore: Math.max(prev.bestScore || 0, percentage)
      }));
      
      setIsFinished(true);
    }
  };

  // 2. SCREEN: Results
  if (isFinished) {
    return (
      <div className="score-screen">
        <h2>Results for {selectedQuiz.title}</h2>
        <h3>{localScore} / {questions.length}</h3>
        <button onClick={onClose}>Back to Dashboard</button>
      </div>
    );
  }

  // 3. SCREEN: Question Display
  return (
    <div className="question-card">
      <div className="quiz-header">
        <small>{selectedQuiz.title}</small>
        <span>Question {currentIndex + 1} of {questions.length}</span>
      </div>
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