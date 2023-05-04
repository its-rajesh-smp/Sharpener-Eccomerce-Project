import React, { useContext } from 'react';
import "./PrimaryHeader.css"
import Hamburger from '../UI/Header/Hamburger/Hamburger';
import LogoSection from '../UI/Header/LogoSection/LogoSection';
import HeaderSearch from '../UI/Header/HeaderSearch/HeaderSearch';
import HeaderLinks from '../UI/Header/HeaderLinks/HeaderLinks';
import Cart from '../Cart/Cart';
import UserContainer from '../UserContainer/UserContainer';
// Context
import HeaderLinksCTX from '../../Context/HeaderLinksCTX';


function PrimaryHeader(props) {

    const cartToggel = useContext(HeaderLinksCTX)

    console.log("RENDER HEADER");

    return (
        <>
            <div className=' PrimaryHeader-div  '>
                <div className='PrimaryHeaderItemContainer' >
                    <Hamburger />
                    <LogoSection />
                    <HeaderSearch />
                    <HeaderLinks />
                </div>
            </div>
            <div>
                {cartToggel.openLinks === "TOGGLE_CART" && <Cart />}
                {cartToggel.openLinks === "TOGGLE_USER" && <UserContainer />}
            </div>
        </>
    );
}

export default PrimaryHeader;
