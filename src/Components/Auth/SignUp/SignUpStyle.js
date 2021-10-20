import styled from 'styled-components'


export const SignUpBackground =styled.div`
    display:flex;
    height:100vh;
    width:100vw;
    justify-content: center;
    align-items:center;
    `

export const SignUpContainer=styled.div`
    display:flex;
    height:600px;
    width:350px;
    position: relative;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:white;
    border: 5px solid black;
    border-radius:2rem;
    background-color:white;
    `
export const SignUpWrapper=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:stretch;
    margin:30px;
    `

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


export const InputWrapper=styled.div`
    display:flex;
    flex-direction:column;
    align-self: center;
    
    align-items:flex-start;
    justify-content:center;`

export const OauthText=styled.div`
text-align: center;
margin-top: 60px;
align-self:center;
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
}`

export const SignUpBtnWrapper =styled.div`
    align-self:center;`

export const LoginText=styled.div`
    display:flex;
    margin-left:25px;
    text-align: center;
    color: black;
`


export const LoginLink=styled.a`
    text-decoration: none;
    text-align:center;
    font-weight: 600;
    cursor:pointer;
    margin-left:6px;
    color:black;
    &:hover{
        color: black;
        
    }
`