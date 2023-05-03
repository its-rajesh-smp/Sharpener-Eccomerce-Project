import React from 'react';
import "./UserProfileMini.css"
import { userProfileImage } from '../../../../Assets/Assets';

function UserProfileMini(props) {
    return (
        <div className=' UserProfileMini-div '>
            <img className='UserProfileMini-div_userImage' src={userProfileImage} alt='userImage' />
            <p>{props.userDetails.userName !== undefined ? props.userDetails.userName : "Login First"}</p>
            <p style={{ fontSize: "12px" }} ><span>{props.userDetails.userPhone}</span></p>
        </div>
    );
}

export default UserProfileMini;
