import React from 'react'
import './button.css'

function Button({ text, onclick, outline }) {
    return (
        <div className={{outline } ? 'outline-btn' : 'btn'} onClick={() => onclick()}>
            {text}
        </div>
    )
}

export default Button