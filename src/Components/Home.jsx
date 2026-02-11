// Home.jsx
import React from 'react'
import Card from './Card'

const Home = ({ stats, setStats, onSaveQuiz, quizzes }) => {
  return (
    <>
      <h1>Quiz Dashboard</h1>
      <div className='card-wrapper'>
        {/* Card 1: The Creator */}
        <Card title="Create Quiz" type="create" onSave={onSaveQuiz} />

        {/* Card 2: The Portal (Now holds ALL quizzes) */}
        <Card 
          title="Take a Quiz" 
          type="take" 
          stats={stats} 
          setStats={setStats} 
          allQuizzes={quizzes} // Pass the whole array here
        />

        {/* Card 3: Progress */}
        <Card title="My Stats" type="progress" stats={stats} setStats={setStats} />
      </div>
    </>
  )
}

export default Home