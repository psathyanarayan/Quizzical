import React from "react"
import "/src/styles/Option.css"


export default function Option(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#D6DBF5" : "white"
    }
    return (
        <div className="Option" style={styles} onClick={props.onClick}>
            <p>{props.value}</p>
        </div>
    )
}