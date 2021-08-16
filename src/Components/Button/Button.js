import React, { Component } from 'react'
import './Button.css'
export default class Button extends Component {

    render() {
        return (
            
            <div>
            <link rel="preconnect" href="https://fonts.gstatic.com"/> 
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>

                <button>{this.props.Name}</button>
            </div>
            
        )
    }
}

