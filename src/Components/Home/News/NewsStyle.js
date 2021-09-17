import styled from 'styled-components'

export const ServicesContainer=styled.div`
    display:flex;
    flex-direction:${props =>props.order? "row-reverse":"row"};
    padding:100px;
    background:${props=> props.color? "white":"black"};
    @media screen and (max-width:900px){
        flex-direction:${props =>props.order? "column-reverse":"column"};
        padding:20px; 
    }
    `
export const ServicesContent=styled.div`
    display: flex;
    flex:1;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    `
export const ServicesHeadline=styled.h1`
    font-weight:700;
    width: 60%;
    color:${props=> props.color? "black":"white"};
    letter-spacing:1px;
    text-align:center;
    `
export const ServicesDescription=styled.div`
    font-size:1.5rem;
    color:${props=> props.color? "black":"white"};
    width:70%;
    text-align:center;
    font-weight:200;
    `
export const ServicesImage=styled.img`
    display:flex;
    flex:1;
    justify-self:center;
    height:400px;
    width: 400px;
    `