
import React from 'react';

const Result = ({ onBackToHome }) => {
  return (
    <div id='result-main'>
      <div id='result-sec'>
        <p>RESULT</p>
        <div id='phrase'>
          <p>You Need More Practice!</p>
          <p>Your Score is 20%</p>
        </div>
        <div id='data'>
          <div>
            <p>Total Number of Questions</p> <p></p>
          </div>
        </div>
        <div id='result-btn'>
            <button className='Bottns' onClick={onBackToHome}>Back</button>
            <button className='Bottns'>BackHome</button>
        </div>
      </div>
    </div>
  );
};

export default Result;
