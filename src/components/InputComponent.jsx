import React from 'react'

function InputComponent({ type, name, placeholder, onchange }) {
    return (
        <div>
            <input type={type} name={name} placeholder={placeholder}
                onChange={onchange} />
        </div>
    )
}

export default InputComponent
