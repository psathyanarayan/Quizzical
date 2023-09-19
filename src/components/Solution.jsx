import React from "react"
import "/src/styles/Option.css"


export default function Solution(props) {
    const sol = {
        backgroundColor: props.correct === true ? "#94D7A2" : (props.correct === false ? "#F8BCBC" : "#F5F7FB"),
        color: "grey", // Text color remains constant
        borderColor:"grey"
    };
    
    

    return (
        <button className="Option" style={sol}  disabled  >
            <p>{props.value}</p>
        </button>
    )
}