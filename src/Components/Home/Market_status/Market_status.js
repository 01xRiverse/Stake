import React from 'react'
import {Gainers} from '../../../Shared/Gainers'
import {Loosers} from '../../../Shared/Loosers'
import Coin_comp from './Card/Coin_comp'
import {Text} from './Text/Text'
import "./Text/Text.css"
import './Market_status.css'

function Market_status() {
    return (

        <div className="Market">
            <div className="image-effect"></div> 
            <h3 className="Market-text-style"><Text className="Gangsta"></Text></h3>
            
            
            <div className="perfomers">
            <h4 className="Gainers-text">Top Gainers</h4>
            <div className="Gainers ">
            {Gainers.map((coin,index)=> {
                return(
                    <Coin_comp key={index} coin={coin}></Coin_comp>
                )
            })}
            </div>
            
            <h4 className="Loosers-text">Top Loosers</h4>
            <div className='Loosers'>
            {Loosers.map((coin,index)=> {
                return(
                    <Coin_comp key={index} coin={coin}></Coin_comp>
                )
            })}
            </div>
            </div>

        </div>
    )
}

export default Market_status
