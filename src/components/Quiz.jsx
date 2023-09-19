import React from "react";
import "/src/styles/Quiz.css"; // Assuming Quiz.css is in the same directory as this component

export default function Quiz(props) {
  return (
    <div className="quiz-container">
        <img src="images/anya.png" alt="" />
      
      <h1>AnimeQuest</h1>
      <p className="desc">
      Answer anime-based questions to earn points, but remember, once you choose an answer, it's final!

        </p>

      <button onClick={props.onStartQuiz}>Start Quiz</button>

        
      
    </div>
  );
}
