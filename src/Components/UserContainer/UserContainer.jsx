import React, { useContext } from 'react';
import "./UserContainer.css"
import UserProfileMini from '../UI/UserContainer/UserProfileMini/UserProfileMini';
import LoginBTN from '../UI/UserContainer/LoginBTN/LoginBTN';
import UserLinksContainer from '../UI/UserContainer/UserLinksContainer/UserLinksContainer';
import LoginContext from '../../Context/LoginContext';

function UserContainer(props) {

    const loginCTX = useContext(LoginContext)


    return (
        <div className=' UserContainer-div slide '>
            <UserProfileMini userDetails={loginCTX.loginState} />

            {!loginCTX.isLogin && <LoginBTN />}

            <UserLinksContainer />

        </div>
    );
}

export default UserContainer;
