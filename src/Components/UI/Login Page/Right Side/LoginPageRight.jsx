import React, { useRef } from 'react';
import "./LoginPageRight.css"
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useContext } from 'react';
import LoginContext from '../../../../Context/LoginContext';

function LoginPageRight(props) {

    const loginCTX = useContext(LoginContext)
    const emailRef = useRef()
    const passwordRef = useRef()

    /* -------------------------------------------------------------------------- */
    /*                         SEND DATA TO LOGIN CONTEXT                         */
    /* -------------------------------------------------------------------------- */
    const createAndLoginBtnHandeler = (e) => {
        e.preventDefault()
        if (!loginCTX.loader) {
            const enteredEmail = emailRef.current.children[1].children[0].value
            const enteredPassword = passwordRef.current.children[1].children[0].value
            const action = props.for
            loginCTX.createAndLoginUser(enteredEmail, enteredPassword, action)
        }
    }


    return (
        <div className='Login-div_rightSide'>
            <form className='Login-div_rightSide_form'>
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828466.png" alt="loginIcon" />
                <div className='Login-div_rightSide_form_div'>

                    <TextField ref={emailRef} style={{ marginBottom: "10px" }} id="standard-basic" label="Your Email" variant="standard" />
                    <TextField ref={passwordRef} id="standard-basic" label="Your Password" variant="standard" />


                    <button onClick={createAndLoginBtnHandeler}>{loginCTX.loader ? <i className='bx bx-loader-circle bx-spin' ></i> : props.for !== "newAccount" ? "LOGIN" : "CREATE ACCOUNT"}</button>


                    {
                        props.for !== "CREATE_NEW_USER" ?
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
