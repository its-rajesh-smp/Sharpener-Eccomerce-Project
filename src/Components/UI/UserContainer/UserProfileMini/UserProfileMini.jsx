import React from 'react';
import "./UserProfileMini.css"
import { userProfileImage } from '../../../../Assets/Assets';

function UserProfileMini(props) {
    return (
        <div className=' UserProfileMini-div '>
            <img className='UserProfileMini-div_userImage' src={userProfileImage} alt='userImage' />
            <p>Rajesh Singha Mahapatra</p>
            <p style={{ fontSize: "12px" }} >+91 8942908195</p>
        </div>
    );
}

export default UserProfileMini;
