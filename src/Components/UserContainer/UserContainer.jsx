import React from 'react';
import "./UserContainer.css"
import UserProfileMini from '../UI/UserContainer/UserProfileMini/UserProfileMini';
import LoginBTN from '../UI/UserContainer/LoginBTN/LoginBTN';
import UserLinksContainer from '../UI/UserContainer/UserLinksContainer/UserLinksContainer';

function UserContainer(props) {
    return (
        <div className=' UserContainer-div slide '>
            <UserProfileMini />
            <LoginBTN />
            <UserLinksContainer />

        </div>
    );
}

export default UserContainer;
