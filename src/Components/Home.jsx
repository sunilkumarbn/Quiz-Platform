import React from 'react'
import Card from './Card'
const Home = () => {
  return (
    <>
    <h1>Welcome to the Quiz Platform</h1>
    <div className='card-wrapper'>
        <Card title="Create Your Own Quiz" description="Easily create quizzes on any topic and share them with friends!" />
        <Card title="Take Quizzes" description="Test your knowledge by taking quizzes created by others!" />
        <Card title="Track Your Progress" description="Keep track of your quiz scores and see how you improve over time!" />
    </div>
    </>
  )
}

export default Home
