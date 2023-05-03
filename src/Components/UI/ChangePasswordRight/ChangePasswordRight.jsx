import React from 'react';
import "./ChangePasswordRight.css"
import { TextField } from '@mui/material';

function ChangePasswordRight(props) {
    return (
        <div className=' ChangePasswordRight-div '>

            <form className='ChangePasswordRight_form'>

                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828466.png" alt="loginIcon" />

                <div className='ChangePasswordRight_form_div'>

                    <TextField style={{ marginBottom: "10px" }} id="standard-basic" label="Your Email" variant="standard" />
                    <TextField style={{ marginBottom: "10px" }} id="standard-basic" label="New Password" variant="standard" />
                    <TextField style={{ marginBottom: "10px" }} id="standard-basic" label="Confirm Password" variant="standard" />


                    <button>CHANGE PASSWORD</button>

                </div>
            </form>

        </div>
    );
}

export default ChangePasswordRight;
