import React from 'react';
import "./LoginPageRight.css"
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom/cjs/react-router-dom';

function LoginPageRight(props) {





    return (
        <div className='Login-div_rightSide'>
            <form className='Login-div_rightSide_form'>
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828466.png" alt="loginIcon" />
                <div className='Login-div_rightSide_form_div'>

                    <TextField style={{ marginBottom: "10px" }} id="standard-basic" label="Your Email" variant="standard" />
                    <TextField id="standard-basic" label="Your Password" variant="standard" />


                    <button>{props.for !== "newAccount" ? "LOGIN" : "CREATE ACCOUNT"}</button>

                    {
                        props.for !== "newAccount" ?
                            <div>
                                <Link to="/changepassword" ><p>Forgot password!</p></Link>
                                <Link to="/newregistration" ><p>Create new account</p></Link>
                            </div> : null
                    }

                </div>
            </form>
        </div>
    );
}

export default LoginPageRight;
