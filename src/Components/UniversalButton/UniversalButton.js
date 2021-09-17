import React from 'react'
import {Horizontal} from './UniversalButtonStyle'
function UniversalButton(props) {
    return (
       <Horizontal color={props.color} IsLarge={props.IsLarge} ><span class="text">{props.text}</span></Horizontal> 
    )
}

export default UniversalButton
