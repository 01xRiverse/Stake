import styled from 'styled-components'
import {TiTick,TiTimes} from 'react-icons/ti'

export const PriceContainer=styled.div`
    display:flex;
    width:350px;
    height:auto;
    align-items:center;
    justify-content:center;
    border: 3px solid black;
    border-radius:15px;
    margin:30px;
    background:white;`

export const PriceWrapper=styled.div`
    display:flex;
    flex-direction:column;
    position: none;
    margin:10px;
    align-self: flex-start;
    align-items:center;
    justify-content:center;
    position:center;`

export const PriceTitle=styled.div`
    font-weight:100;
    font-size:2rem;
    letter-spacing:0.01rem;
    text-align:center;
    `
export const PriceSVG=styled.img`
    width:200px;
    height:200px;`

export const PriceDetails= styled.div`
    display:flex;
    margin:10px;
    flex-direction:column;
    justify-content:center;
    text-align: start;
    align-items:flex-start;`

export const PriceDetail=styled.div`
    font-size:1.3rem;
    font-weight:50;
    text-align:start;
    margin:5px;`


export const Tick=styled(TiTick)`
    color: #16c784;
    ` 
export const Cross=styled(TiTimes)
`
    color: #ea3943; `
