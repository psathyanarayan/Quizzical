import React from "react"
import "/src/styles/Question.css"
import Card from "/src/components/Card.jsx"
import { nanoid } from "nanoid"
export default function Question() {
    const [ansCheck,setAnsCheck] = React.useState(false)
    const [playAgain,setPlayAgain] = React.useState(true)
    const [scoreCount, setScoreCount] = React.useState(0)
    const [answer,setAnswers] = React.useState({})
    const [question,setQuestion] = React.useState([])
    const [correctAns,setCorrectAns] = React.useState([])
    
    

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

  function handleClick(ans,ques) {
    // Check if selectedAnswer is null to prevent multiple selections
    console.log(ans)
    setQuestion((prevArr) => {
        return prevArr.map((item) => {
            if (item.id === ques.id) {
            return {
                ...item,
                [ans.isHeld]: !ans.isHeld,
            };
            } else {
            return item;
            }
        })
    })
    if(ans.isHeld){
      setAnswers((prevAnswers) => {
        return {
          ...prevAnswers,
          [id]: ans.answers,
        }
      })

      if(ans === correctAns){
        setScoreCount(prevScore => prevScore + 1)
      }
    }
    
  }
    function CheckAnswer(){
        setAnsCheck(true)
    }
    function PlayAgain(){
        setPlayAgain(true)
        setAnsCheck(false)
    }
    return(
        <div className="question-container">
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
                    <button className="CheckAnswer" onClick={CheckAnswer}>Check Answers</button>)}
        </div>
    )
}