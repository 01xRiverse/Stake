import React from 'react'
import { PriceBg, PriceWrapper, Tag,PriceBtn } from './PriceStyle'


function Price(props) {
    return (
        <PriceWrapper>
            <PriceBg color={props.BgColor}></PriceBg>
            <PriceBtn color={props.BtnColor}><Tag>{props.Price}</Tag></PriceBtn>
        </PriceWrapper>
    )
}


export default Price
