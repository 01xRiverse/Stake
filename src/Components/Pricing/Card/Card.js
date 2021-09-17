import React from 'react'
import Button from '../Button/Button'
import './Card.css'

function Card(props) {
    return (
        <div class="card">
            <h1>{props.Plan.plan_header}</h1>
            <h3>{props.Plan.plan_description}</h3>

            <div class="cardHorizontalRule"></div>
            
            <ul>
            {props.Plan.plan_features.map((feature,index)=>{
                    return(
                    <li><h5>{feature}</h5></li>
                )})}
            </ul>
                
            


            <Button price={props.Plan.plan_price}></Button>
        </div>
    )
}

export default Card
