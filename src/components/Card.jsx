import React from "react"
import "/src/styles/Card.css"
import Option from "./Option"
import he from "he"
import { nanoid } from "nanoid"
export default function Card(props) {

    const arr = props.ques.answers
    const question = props.ques
    console.log(question)
    const optionElement =  arr.map((item) => {
  
        return <Option key={item.id} onClick={()=>props.onclick(item,question)} value={he.decode(item.answer)} isHeld={question.answers.isHeld} />
      })
    
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