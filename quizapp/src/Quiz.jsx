import React, { useState } from 'react';
import Result from './Result';
function Quiz({ onQuizComplete }) {

  const questions = [
    {
      question: "What temperature does water boil at?",
      Options: [

        "50 degrees Celcius",
        "25 degrees Celcius",
        "100 degrees Celcius",
        "150 degrees Celcius",
      ],
      answer: "100 degrees Celcius"
    },

    {
      question: "Who wrote Julius Caesar, Macbeth and Hamlet?",
      Options: [

        "Wole Soyinka",
        "William Shakespeare",
        "Ngozi Chimamanda Adichie",
        "Dan Brown",
      ],
      answer: "William Shakespeare"
    },

    {
      question: "What did the crocodile swallow in Peter Pan?",
      Options: [

        "A Book",
        "A Computer",
        "A pair of shoes",
        "Alarm Clock",
      ],
      answer: "Alarm Clock"
    },

    {
      question: "Which is the only mammal that can’t jump?",
      Options: [

        "Dog",
        "Elephant",
        "Goat",
        "Lion",
      ],
      answer: "Elephant"
    },

    {
      question: "Who lived at 221B, Baker Street, London?",
      Options: [

        "Tony Stark",
        "Morgan Freeman",
        "Sherlock Holmes",
        "Samuel L. Jackson",
      ],
      answer: "Sherlock Holmes"
    },

    {
      question: "What colour is a panda?",
      Options: [

        "Green and Yellow",
        "Blue and Red",
        "Green and White",
        "Black and White",
      ],
      answer: "Black and White"
    },

    {
      question: "Where is the smallest bone in the human body?",
      Options: [

        "The Chest",
        "The Ear",
        "The Legs",
        "The Hands",
      ],
      answer: "The Ear"
    },

    {
      question: "What does the roman numeral C represent?",
      Options: [
        "100",
        "10",
        "10,000",
        "1,000,00"
      ],
      answer: "100"
    },

    {
      question: "What takes place in Hong Kong's Happy Valley?",
      Options: [
        "Chicken Wrestling",
        "Horse racing",
        "Street Racing",
        "Arm Wrestling",
      ],
      answer: "Horse racing"
    },

    {
      question: "Who painted the Mona Lisa?",
      Options: [

        "Alexander Graham Bell",
        "Sir Isaac Newton",
        "Leonardo Da Vinci",
        "Albert Einstein",
      ],
      answer: "Leonardo Da Vinci"
    },

    {
      question: "What's the most important book in the Moslem religion?",
      Options: [

        "The Koran",
        "The Dictionary",
        "The Bible",
        "The Chemistry text Book",
      ],
      answer: "The Koran"
    },

    {
      question: "What's the capital of Ethiopia?",
      Options: [
        "Cape Town",
        "San Francisco",
        "Abuja",
        "Syndey",
      ],
      answer: "Addis Ababa"
    },

    {
      question: "How many squares are there on a chess board?",
      Options: [

        "64",
        "128",
        "32",
        "256",
      ],
      answer: "64"
    },

    {
      question: "Who invented the electric light bulb?",
      Options: [

        "Tom Cruise",
        "Barack Obama",
        "Wole Soyinka",
        "Thomas Edison",
      ],
      answer: "Thomas Edison"
    },

    {
      question: "What are the first three words of the bible?",
      Options: [

        "be with everyone",
        "Again Jesus asked",
        "In the beginning",
        "At that time",
      ],
      answer: "In the beginning"
    }
  ]


  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleOptionClick = (option) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestion] = option;
    setSelectedOptions(updatedOptions);
  };

  const handleNextClick = () => {
    setCurrentQuestion((prevQuestion) => Math.min(prevQuestion + 1, questions.length - 1));
  };

  const handlePrevClick = () => {
    setCurrentQuestion((prevQuestion) => Math.max(prevQuestion - 1, 0));
  };

  const handleQuitClick = () => {
    alert("Really bro? Want to quit?");
    setCurrentQuestion(0)
  };

  const currentQues = questions[currentQuestion];

  return (
    <div id="quiz-main1">
      <div id="quiz-main">
        <div id="main-margin">
          <div id="main1">
            <p>Question</p>
            <div id="qn">
              <p>{currentQuestion + 1} of {questions.length}</p>
            </div>
            <p>{currentQues.question}</p>
          </div>
          <div id="options">
            {currentQues &&
              currentQues.Options.map((option, index) => (
                <button
                  key={index}
                  className={`ans ${selectedOptions[currentQuestion] === option ? 'selected' : ' nl'}`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </button>
              ))}
          </div>
          <div id="submit-content">
            <button className="alter-btn" onClick={handlePrevClick} disabled={currentQuestion === 0}>
              Prev
            </button>
            <button
              className="alter-btn"
              onClick={() => {
                handleNextClick();
                if (currentQuestion === questions.length - 1) {
                  onQuizComplete();
                }
              }}
              disabled={currentQuestion === questions.length - 1}
            >
              Next
            </button>
            <button className="alter-btn" onClick={handleQuitClick}>
              Quit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;