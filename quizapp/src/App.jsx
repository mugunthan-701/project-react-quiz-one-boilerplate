import React, { useState } from 'react';
import Home from './Home';
import Quiz from './Quiz';
import Result from './Result';
import './App.css'

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateToQuiz = () => {
    setCurrentPage('quiz');
  };

  const navigateToResult = () => {
    setCurrentPage('result');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
  };

  return (
    <div id='body'>
      {currentPage === 'home' && <Home onStartQuiz={navigateToQuiz} />}
      {currentPage === 'quiz' && <Quiz onQuizComplete={navigateToResult} />}
      {currentPage === 'result' && <Result onBackToHome={navigateToHome} />}
    </div>
  );
};

export default App;
