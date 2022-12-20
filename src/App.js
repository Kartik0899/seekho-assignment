import React, { useState } from 'react';
import './App.css';
import QuizScreen from "./components/QuizScreen.js";
import JoinScreen from "./components/JoinScreen.js";
import Navbar from './components/Navbar';

function App() {

  const [isQuizStart, setIsQuizStart] = useState(false)

  return (
    <>
      <Navbar />
      <div className='quiz-container'>
        {
          isQuizStart ? (
            <QuizScreen retry={() => setIsQuizStart(false)} />
          ) : (
            <JoinScreen start={() => setIsQuizStart(true)} />
          )
        }
      </div>
    </>
  );
}

export default App;
