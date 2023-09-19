import React from "react"
import "/src/styles/Option.css"


export default function Option(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#D6DBF5" : "white"
    }
    const isDisabled = props.count >= 1;
    return (
        <button className="Option" style={styles} onClick={props.onClick} disabled={isDisabled}  >
            <p>{props.value}</p>
        </button>
    )
}