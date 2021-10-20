import React from 'react'
import {PriceContainer,PriceWrapper,PriceTitle,PriceSVG,PriceDetails,PriceDetail, Tick, Cross} from './CardStyle.js'
import UniversalButton from '../../../UniversalButton/UniversalButton' 
import Price from './Price/Price'


function Card(props) {
    return (
      <React.Fragment>
         <PriceContainer>
               <PriceWrapper>
                      <PriceTitle>{props.Plan.Title}</PriceTitle>
                      <PriceSVG src={props.Plan.Image}></PriceSVG>
                      <PriceDetails>{props.Plan.Details.map((detail,index)=>{
                          return(
                            <React.Fragment>
                                <PriceDetail>{detail.IsIncluded? <Tick></Tick>:<Cross></Cross> }{detail.Text}</PriceDetail>
                            </React.Fragment>
                          )
                      })}
                      </PriceDetails>
                      <Price Price={props.Plan.Price.Tag} BgColor={props.Plan.Price.BgColor} BtnColor={props.Plan.Price.BtnColor} ></Price>
                      <UniversalButton  IsLarge={true} text="Buy Now"></UniversalButton>
               </PriceWrapper>
           </PriceContainer> 
      </React.Fragment> 
    )
}

export default Card
