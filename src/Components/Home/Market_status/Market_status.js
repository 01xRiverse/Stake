import React from 'react'
import {Gainers} from '../../../Shared/Gainers'
import {Loosers} from '../../../Shared/Loosers'
import Coin_comp from './Card/Coin_comp'
import './Market_status.css'

function Market_status() {
    return (
        <div>
            <h3>Market status</h3>
            <h5>The current cryptocurrency market is 2% up  with a market of $1.9 tril with BTC dominance 44%. </h5>
            <hr></hr>
            <h4>Top Gainers</h4>
            <div className="Gainers">
            {Gainers.map((coin,index)=> {
                return(
                    <Coin_comp coin={coin}></Coin_comp>
                )
            })}
            </div>
            <hr></hr>
            <h4>Top Loosers</h4>
            <div className='Loosers'>
            {Loosers.map((coin,index)=> {
                return(
                    <Coin_comp coin={coin}></Coin_comp>
                )
            })}
            </div>

        </div>
    )
}

export default Market_status
