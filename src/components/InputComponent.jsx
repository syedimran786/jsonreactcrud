import React from 'react'

function InputComponent({ type, name, placeholder, onchange, value }) {

    return (
        <div>
            <input type={type} name={name} placeholder={placeholder}
                onChange={onchange} value={value} />
        </div>
    )
}

export default InputComponent
