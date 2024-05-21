import React from 'react'
import "./css/ButtonComponent.css"

function ButtonComponent({ children, classname, onclick = () => { } }) {

    return (
        <button className={classname} onClick={onclick}>
            {children}
        </button>
    )
}

export default ButtonComponent
