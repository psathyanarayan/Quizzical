import React from "react";
import "/src/styles/Quiz.css"; // Assuming Quiz.css is in the same directory as this component

export default function Quiz() {
  return (
    <div className="quiz-container">
      
      <h1>Quizzical</h1>
      <p className="desc">Some description if needed</p>
      <button>Start Quiz</button>
      
    </div>
  );
}
