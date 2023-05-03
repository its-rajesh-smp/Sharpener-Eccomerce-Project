import React from 'react';
import "./Login.css"
import { TextField } from '@mui/material';

function Login(props) {
    return (
        <div className='container Login-div '>

            <div className='Login-div_leftSide'>
                <div>
                    <h1>Login <i className='bx bx-shopping-bag'></i></h1>
                    <p>Login with your email & password</p>
                </div>
            </div>

            <div className='Login-div_rightSide'>
                <form className='Login-div_rightSide_form'>

                    <img src="https://cdn-icons-png.flaticon.com/512/1828/1828466.png" alt="loginIcon" />


                    <div className='Login-div_rightSide_form_div'>

                        <TextField style={{ marginBottom: "10px" }} id="standard-basic" label="Your Email" variant="standard" />
                        <TextField id="standard-basic" label="Your Password" variant="standard" />
                        <button>LOGIN</button>
                        <div>
                            <p>Forgot password!</p>
                            <p>Create new account</p>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
