import React from 'react'
import './Input.css'
export default function Input(props) {
    return (
        <div class="form__group field">
                <input type={props.type} class="form__field" placeholder={props.title} name={props.title} id={props.title} required />
                <label for="name" class="form__label">{props.title}</label>
        </div>
    )
}
