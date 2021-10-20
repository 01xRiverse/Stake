import React from 'react'
import Input from '../Input/Input'
import {Cross, LoginBackground,LoginBtnWrapper,LoginCointainer,LoginWrapper,OauthText, SignUpLink, SignUpText} from './LoginStyle'
import UniversalButton from '../../UniversalButton/UniversalButton'
import Oauth from '../Oauth/Oauth'
import {FaTimes} from 'react-icons/fa'

function Login() {
    return (
      <LoginBackground>
          <LoginCointainer>
              <Cross href="/"><FaTimes></FaTimes></Cross>
           <LoginWrapper>
               <Input type="text" title="Email"></Input>
               <Input type="password" title="Password"></Input> 
               <OauthText>Login through</OauthText>
               <Oauth></Oauth>
              <LoginBtnWrapper><UniversalButton IsLarge={true} text="Login" ></UniversalButton> </LoginBtnWrapper> 
               <SignUpText> Are you new here ? <SignUpLink href='/SignUp'> Sign Up</SignUpLink></SignUpText>
           </LoginWrapper>
       </LoginCointainer> 
      </LoginBackground>
    )
}

export default Login
