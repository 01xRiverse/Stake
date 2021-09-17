import React from 'react'
import './Button.css'


function Button(props) {
    return (
        <div className="Price_container">
            <a className="Price">{props.price}</a>
        </div>
    )
}

export default Button
