import React from 'react'
import Card from './Card/Card'
import {Plans} from '../../../Shared/Plans'
import './Pricing.css'

function Pricing() {
    return (
        
            <div className="PricingContainer" id='pricing' >
                <div><h1 className="PricingText">One Step away from entering a whole new world of oppurtunities.</h1></div>
                <div className="Cards">
                {Plans.map((plan,index)=>{
                return(
                    <Card Plan={plan} ></Card>
                )
            })}
                </div>
            </div>
        
    )
}

export default Pricing
