import React from 'react'
import {ServicesContainer,ServicesContent,ServicesHeadline,ServicesDescription,ServicesImage} from './NewsStyle'
import UniversalButton from '../../UniversalButton/UniversalButton'


function News(props) {
    return (
        <React.Fragment>
          <ServicesContainer order={props.Services.reverse} color={props.Services.color}>
                <ServicesContent>
                    <ServicesHeadline color={props.Services.color}>{props.Services.Headline}</ServicesHeadline>
                    <ServicesDescription color={props.Services.color}>{props.Services.Content}</ServicesDescription>
                    <UniversalButton IsLarge={true} color={props.Services.BtnColor}text={props.Services.BtnText}></UniversalButton>
                </ServicesContent>
                <ServicesImage src={props.Services.Logo} alt={props.Services.alt}/>
          </ServicesContainer>
        </React.Fragment>
    )
}

export default News
