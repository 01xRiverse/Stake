import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const LoginBackground=styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;`
    
export const LoginCointainer=styled.div`
    display:flex;
    width:300px;
    height:480px;
    position: relative;
    flex-direction:column;
    background-color:white;
    opacity: 1;
    border:5px solid #082032 ;
    border-radius:2rem;
    justify-content:center;
    align-items:center;`

export const Cross=styled.a`
    position: absolute;
    cursor:pointer;
    font-size:1.5rem;
    top:15px;
    color:black;
    right:15px;
    &:hover{
        color:black;
    }
    ;
    `

export const LoginWrapper=styled.div`
    display:flex;
    margin:20px;
    flex-direction:column;
    align-items:stretch;
    justify-content:space-between;
   `
export const LoginBtnWrapper=styled.div`
    display:flex;
    justify-self:center;
    align-self:center;`

export const OauthText=styled.div`
   text-align: center;
   margin-top: 60px;
   margin-bottom: -20px;
   font-size: 1rem;
   font-family: sans-serif;
    color: black;
    font-weight: 500;
    width: 225px;
    max-width: 400px;
    position: relative;
   &:before {
  content: "";
  display: block;
  width: 60px;
  height: 2px;
  background: #000;
  opacity: 0.5;
  left: 0;
  top: 50%;
  position: absolute;
}
&:after {
  content: "";
  display: block;
  width: 60px;
  height: 2px;
  background: #000;
  right: 0;
  opacity: 0.5;
  top: 50%;
  position: absolute;
}
    `
export const SignUpText=styled.div`
    display:flex;
    margin-left:25px;
    text-align: center;
`


export const SignUpLink=styled.a`
    text-decoration: none;
    text-align:center;
    cursor:pointer;
    font-weight: 600;
    margin-left:6px;
    color:black;
    &:hover{
        color: black;
        
    }
`