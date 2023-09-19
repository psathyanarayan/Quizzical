import React from "react"
import "/src/styles/Card.css"
import Solution from "./Solution"
import he from "he"
export default function SolutionCard(props) {
    const arr = props.ques.answers
    const optionElement = arr.map((item) => (
        <Solution
            key={item.id}
            
            value={he.decode(item.answer)}
            correct ={item.CheckAns}
        />
    ));
    
    return(
        <div className="card-container">
      <h3>{he.decode(props.question)}</h3>
        <div className="ans-container">
            {optionElement}
            
        </div>
      
      <hr />
    </div>
    )
}