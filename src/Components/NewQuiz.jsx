import React, { useState } from 'react';

const NewQuiz = ({ onSave, onClose }) => {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([]);
  
  // Local state for the "current" question being typed
  const [currentQuestion, setCurrentQuestion] = useState({
    question: "",
    options: ["", "", "", ""],
    answer: ""
  });

  const handleAddQuestion = () => {
    if (!currentQuestion.question || !currentQuestion.answer) {
      alert("Please fill in the question and the correct answer!");
      return;
    }
    // Add current question to the list and reset the form for the next one
    setQuestions([...questions, currentQuestion]);
    setCurrentQuestion({ question: "", options: ["", "", "", ""], answer: "" });
  };

  const handleFinalSave = (e) => {
    e.preventDefault();
    if (questions.length === 0 && !currentQuestion.question) {
      alert("Add at least one question!");
      return;
    }

    // Include the current question if they didn't click "Add" yet
    const finalQuestions = currentQuestion.question 
      ? [...questions, currentQuestion] 
      : questions;

    const fullQuiz = {
      title,
      description: `A quiz with ${finalQuestions.length} questions`,
      questions: finalQuestions
    };

    onSave(fullQuiz);
    onClose();
  };

  return (
    <div className="new-quiz-form">
      <h2>Create New Quiz</h2>
      
      <input 
        type="text" 
        placeholder="Quiz Title (e.g., JavaScript Mastery)" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="title-input"
      />

      <div className="question-builder">
        <h3>Question {questions.length + 1}</h3>
        <input 
          type="text" 
          placeholder="Enter Question" 
          value={currentQuestion.question}
          onChange={(e) => setCurrentQuestion({...currentQuestion, question: e.target.value})}
        />
        
        {currentQuestion.options.map((opt, index) => (
          <input 
            key={index}
            placeholder={`Option ${index + 1}`}
            value={opt}
            onChange={(e) => {
              const newOptions = [...currentQuestion.options];
              newOptions[index] = e.target.value;
              setCurrentQuestion({...currentQuestion, options: newOptions});
            }}
          />
        ))}

        <input 
          placeholder="Correct Answer (must match one of the options)" 
          value={currentQuestion.answer}
          onChange={(e) => setCurrentQuestion({...currentQuestion, answer: e.target.value})}
        />
        
        <div className="button-group">
          <button type="button" onClick={handleAddQuestion}>+ Add Another Question</button>
          <button type="button" onClick={handleFinalSave} className="save-btn">Finish & Save Quiz</button>
        </div>
      </div>

      <div className="preview">
        <p>Questions added so far: {questions.length}</p>
      </div>
    </div>
  );
};

export default NewQuiz;