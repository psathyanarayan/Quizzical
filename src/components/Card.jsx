import React from "react"
import "/src/styles/Card.css"
import Option from "./Option"
import he from "he"
import { nanoid } from "nanoid"
export default function Card(props) {
    const [count, setCount] = React.useState(0);
    const arr = props.ques.answers
    const question = props.ques
    const optionElement = arr.map((item) => (
        <Option
            key={item.id}
            onClick={() => {
                if (!item.isHeld && count >= 1) {
                    return; // Don't increment count if the button is already held or count is greater than or equal to 1
                }
                if (!item.isHeld) {
                    setCount(count + 1); // Increment count only if the button is not held
                }
                props.onclick(item, question);
            }}
            value={he.decode(item.answer)}
            count={count}
            isHeld={item.isHeld}
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