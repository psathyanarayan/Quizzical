import React from "react"
import "/src/styles/Question.css"
import Card from "/src/components/Card.jsx"
import SolutionCard from "./SolutionCard"
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'
export default function Question() {
    const [ansCheck,setAnsCheck] = React.useState(false)
    const [playAgain,setPlayAgain] = React.useState(true)
    const [scoreCount, setScoreCount] = React.useState(0)
    const [question,setQuestion] = React.useState([])
    
    


    React.useEffect(() => {
    if (playAgain === true) {
      fetch("https://opentdb.com/api.php?amount=5&category=31&type=multiple")
        .then((response) => response.json())
        .then((data) => {
          setQuestion(() => {
            return data.results.map((item) => {
              // Shuffle the answers and include the correct answer
              const answers = [...item.incorrect_answers];
              const randomIndex = Math.floor(Math.random() * (answers.length + 1));
              answers.splice(randomIndex, 0, item.correct_answer);
              const answerOptionsWithIds = answers.map((answer) => ({
                id: nanoid(),
                answer: answer,
                isHeld: false,
              }));
              return {
                ...item,
                id: nanoid(),
                answers: answerOptionsWithIds,
              };
            });
          });
        })
        .finally(() => {setPlayAgain(false)});
    }
  }, [playAgain]);

  function handleClick(ans,ques,count) {
    // Check if selectedAnswer is null to prevent multiple selections
    setQuestion((prevArr) => {
        return prevArr.map((item) => {
          const updatedAnswers = item.answers.map((ansItem) => {
            
            if (ansItem.id === ans.id) {
              // Spread the 'ansItem' and update 'isHeld' property based on 'ans.isHeld'
              if(ansItem.answer === ques.correct_answer){
                  setScoreCount(prev => prev+1)
              }
              return {
                ...ansItem,
                isHeld: !ansItem.isHeld, // Assuming 'ans.isHeld' is a boolean
                CheckAns: ansItem.answer === ques.correct_answer,
              };

            } else {
              return ansItem; // Return 'ansItem' unchanged if the condition doesn't match
            }
          });

      
          // Spread the 'item' and update 'answers' property with the updatedAnswers array
          return {
            ...item,
            answers: updatedAnswers,
          };
        });
      });
      
      
    }
    
  
    function CheckAnswer(){
        setAnsCheck(true)
        
    }
    function PlayAgain(){
        setPlayAgain(true)
        setAnsCheck(false)
    }
    return(
        ansCheck==false ? <div className="question-container">
            {question.map((item) => (
        <Card id={item.id} key={item.id} onclick={handleClick} question={item.question} correct_answer={item.correct_answer} ques={item} avail_answers={item.answers}   />
      ))}
            {ansCheck == true?
                (
                    <div className="play-again">
                        <p>You scored 3/5 correct answers</p>
                        <button className="PlayAgain" onClick={PlayAgain}>Play Again</button>
                    </div>):
                (
                    
                    <button className="CheckAnswer" onClick={CheckAnswer}>Submit Answers</button>)}
        </div>:<div className="question-container">
            {question.map((item) => (
        <SolutionCard id={item.id} key={item.id}  question={item.question} correct_answer={item.correct_answer} ques={item} avail_answers={item.answers}   />
      ))}
         <div className="play-again">
                        <p>You scored {scoreCount}/5 correct answers</p>
                        {scoreCount == 5 ? <Confetti />:null}
                        <button className="PlayAgain" onClick={PlayAgain}>Play Again</button>
                    </div>   
        </div>
    )
}