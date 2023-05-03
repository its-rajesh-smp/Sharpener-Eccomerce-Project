import React from 'react';
import "./LoginPageleft.css"

function LoginPageleft(props) {


    return (
        <div className=' Login-div_leftSide '>
            <div style={{ backgroundImage: `url(${props.backImage})` }}>
                <h1>{props.text1} <i className='bx bx-shopping-bag'></i></h1>
                <p>{props.text2}</p>
            </div>

        </div>
    );
}

export default LoginPageleft;
