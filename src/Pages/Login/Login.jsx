import React from 'react';
import "./Login.css"
import LoginPageleft from '../../Components/UI/Login Page/Left Side/LoginPageleft';
import LoginPageRight from '../../Components/UI/Login Page/Right Side/LoginPageRight';
import { loginPageLeftBackground } from '../../Assets/Assets';



function Login(props) {
    return (
        <div className='container Login-div '>


            <LoginPageleft backImage={loginPageLeftBackground} text1="Login" text2="Login with your email & password" />
            <LoginPageRight icon="" for="login" />


        </div>
    );
}

export default Login;
