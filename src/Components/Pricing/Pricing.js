import React from 'react'
import Card from './Card/Card'
import {Plans} from '../../Shared/Plans'
import './Pricing.css'

function Pricing() {
    return (
        
            <div >
                <div><h3 className="blah">Test test test test test test</h3></div>
                <div className="Cards overflow-auto ">
                {Plans.map((plan,index)=>{
                return(
                    <Card Plan={plan} className="flex "></Card>
                )
            })}
                </div>
            </div>
        
    )
}

export default Pricing
