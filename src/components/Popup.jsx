import React from 'react'
import "./css/Popup.css"

function Popup({ classname, message }) {
    return (
        <div className={"popup " + classname}>
            {message}
        </div>
    )
}

export default Popup
