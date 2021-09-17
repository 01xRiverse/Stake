import styled from 'styled-components'


export const Horizontal=styled.a`
    display: flex;
    justify-self: center;
    justify-content: center;
    align-items: center;
    position: relative;
    width: ${props =>props.IsLarge? "175px":"250px"};
    height: ${props =>props.IsLarge? "50pxpx":"80px"};
    text-decoration: none;
    margin: ${props =>props.IsLarge? "15px":"20px"};
    border: ${props =>props.IsLarge? "4px":"7px"} solid ${props => props.color? "white":"black"};
    font-size: ${props =>props.IsLarge? "1rem":"1rem"};
    cursor: pointer;
   > .text{
    position: relative;
    color: transparent;
    background-image: linear-gradient(90deg, ${props => props.color? "black":"white"} 0%, ${props => props.color? "black":"white"} 50%, ${props => props.color? "white":"black"} 50%, ${props => props.color? "white":"black"} 100%);
    background-repeat: repeat;
    background-size: 200%;
    background-position: 100% 0;
    -webkit-background-clip: text;
    
    background-clip: text;
    transition: background-position 300ms;
   }    

   &:hover .text{
        background-position: 0 0;
    }

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${props => props.color? "white":"black"};
        transform-origin: 100% 0;
        transform: scale3d(0, 1, 1);
        transition: transform 300ms;
        }
    
    &:hover::before{
        transform-origin: 0 0;
        transform: scale3d(1, 1, 1);
    }

    `
