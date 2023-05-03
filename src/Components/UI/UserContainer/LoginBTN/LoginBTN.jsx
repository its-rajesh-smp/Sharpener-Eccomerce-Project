import React, { useContext } from 'react';
import "./LoginBTN.css"
import { Link } from 'react-router-dom/cjs/react-router-dom';
import HeaderLinksCTX from '../../../../Context/HeaderLinksCTX';

function LoginBTN(props) {

    const toggleUserCTX = useContext(HeaderLinksCTX)

    // On Login/NewRegistration Btn Click remove the sidebar
    const onBtnClick = () => {
        toggleUserCTX.toggleUser()
    }



    return (
        <div className=' LoginBTN-div '>
            <Link to="/login"><button onClick={onBtnClick} className='LoginBTN-div_loginBTN'>Login</button></Link>
            <Link to="/newregistration"><button onClick={onBtnClick} className='LoginBTN-div_newAccBTN'>New Account</button></Link>
        </div>
    );
}

export default LoginBTN;
