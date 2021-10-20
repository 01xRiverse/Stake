import React from 'react'
import UniversalButton from '../../UniversalButton/UniversalButton'
import Input from '../Input/Input'
import Oauth from '../Oauth/Oauth'
import {SignUpBackground,SignUpContainer,SignUpWrapper,OauthText,LoginText,LoginLink, SignUpBtnWrapper, InputWrapper, Cross} from './SignUpStyle'
import {FaTimes} from'react-icons/fa'


function SignUp() {
    return (
        <SignUpBackground>
            <SignUpContainer>
                <Cross href="/"><FaTimes></FaTimes></Cross>
                <SignUpWrapper>
                    <InputWrapper>
                        <Input type="text" title="Username"></Input>
                        <Input type="text" title="Email"></Input>
                        <Input type="password" title="Password"></Input>
                        <Input type="password" title="Confirm Password"></Input>
                    </InputWrapper>
                    <OauthText>Sign Up with</OauthText>
                    <Oauth></Oauth>
                    <SignUpBtnWrapper><UniversalButton text="Sign Up" IsLarge={true}></UniversalButton></SignUpBtnWrapper>
                    <LoginText>Already Have and account? <LoginLink href='/Login'>Login</LoginLink></LoginText>
                </SignUpWrapper>
            </SignUpContainer>
        </SignUpBackground>
    )
}

export default SignUp
