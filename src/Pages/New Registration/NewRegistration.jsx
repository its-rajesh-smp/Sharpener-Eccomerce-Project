import React from 'react';
import "./NewRegistration.css"
import LoginPageleft from '../../Components/UI/Login Page/Left Side/LoginPageleft';
import LoginPageRight from '../../Components/UI/Login Page/Right Side/LoginPageRight';
import { createNewAccountRightBackground } from '../../Assets/Assets';

function NewRegistration(props) {
    return (
        <div className='container Login-div '>

            <LoginPageRight icon="" for="newAccount" />
            <LoginPageleft backImage={createNewAccountRightBackground} text1="New Account" text2="Create new account with your email & password" />

        </div>
    );
}

export default NewRegistration;
