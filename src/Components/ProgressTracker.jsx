import React from 'react';
import "./Card.css"; // Assuming you want similar styling

const ProgressTracker = ({ stats }) => {
  // If stats aren't passed yet, we provide fallback "0" values
  const { totalCompleted = 0, averageScore = 0, bestScore = 0 } = stats || {};

  return (
    <div className="progress-container">
      <h2>Your Progress</h2>
      <div className="stat-box">
        <p><strong>Quizzes Taken:</strong> {totalCompleted}</p>
        <p><strong>Average Score:</strong> {averageScore}%</p>
        <p><strong>Best Score:</strong> {bestScore}%</p>
      </div>
      
      {/* Optional: A simple visual progress bar */}
      <div className="progress-bar-bg">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${averageScore}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressTracker;