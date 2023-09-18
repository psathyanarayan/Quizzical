import React from "react"
import "/src/styles/Card.css"

export default function Card() {
    return(
        <div className="card-container">
            <h3>How would one say goodbye in Spanish?</h3>
            <div className="btn-options">
                <button className="option">op1</button>
                <button className="option">op2</button>
                <button className="option">op3</button>
                <button className="option">op4</button>
            </div>
            
            <hr />
        </div>
    )
}