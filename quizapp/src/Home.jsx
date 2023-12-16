import React from 'react';

function Home({ onStartQuiz }) {
  return (
    <div id='home-main'>
      <div id='strt-btn'>
        <p id='p-tag'>Quiz app</p>
        <button id='btn' onClick={onStartQuiz}>
          Start
        </button>
      </div>
    </div>
  );
}

export default Home;
