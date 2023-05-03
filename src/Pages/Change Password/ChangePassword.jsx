import React from 'react';
import "./ChangePassword.css"
import LoginPageleft from '../../Components/UI/Login Page/Left Side/LoginPageleft';
import { changePasswordLeftBackground } from '../../Assets/Assets';
import ChangePasswordRight from '../../Components/UI/ChangePasswordRight/ChangePasswordRight';

function ChangePassword(props) {
    return (
        <div className='container ChangePassword-div '>
            <LoginPageleft backImage={changePasswordLeftBackground} text1="Change Password" text2="Type a more then 6 digit secure password" />
            <ChangePasswordRight />
        </div>
    );
}

export default ChangePassword;
