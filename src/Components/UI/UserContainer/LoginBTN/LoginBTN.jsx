import React from 'react';
import "./LoginBTN.css"

function LoginBTN(props) {
    return (
        <div className=' LoginBTN-div '>
            <button className='LoginBTN-div_loginBTN'>Login</button>
            <button className='LoginBTN-div_newAccBTN'>New Account</button>
        </div>
    );
}

export default LoginBTN;
