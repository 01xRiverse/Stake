import { keyframes } from "styled-components"
import styled from 'styled-components'

const pulse=keyframes
    `0% {
        transform: scale(1, 1);
   }
    50% {
        opacity: 0.3;
   }
    100% {
        transform: scale(1.5);
        opacity: 0;
   }`



export const PriceWrapper=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    `

export const PriceBg=styled.div`
    width: 50px;
    height: 50px;
    border-radius:100% ;
    position:relative;
    animation: ${pulse} 1.2s ease infinite;
    background: ${props => props.color};
`
export const PriceBtn=styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 99;
    border: none;
    background: ${props => props.color};
    background-size: 18px;
    cursor:pointer;
    outline: none;
    `


export const Tag=styled.div`
    position: absolute;
    color: white;
    text-decoration:none;
    font-size: 17px;
    `

