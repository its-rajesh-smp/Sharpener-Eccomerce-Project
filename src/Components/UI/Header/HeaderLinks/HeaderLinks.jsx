import React, { useContext } from 'react';
import "./HeaderLinks.css"
import HeaderLinksCTX from '../../../../Context/HeaderLinksCTX';

function HeaderLinks(props) {

    // Toggle Cart
    const linkClick = useContext(HeaderLinksCTX)

    const onCartBtnClick = () => {
        linkClick.toggleCart()
    }

    const onUserBtnClick = () => {
        linkClick.toggleUser()
    }







    return (
        <div className=' HeaderLinks-div '>
            <i className='bx bx-support'></i>
            <i className='bx bx-bell'></i>

            <div onClick={onCartBtnClick} className='cart'>
                <i className='bx bx-cart-alt'></i>
                <p className='cartQuantity'>5</p>
            </div>

            <i onClick={onUserBtnClick} className='bx bx-user'></i>

        </div>
    );
}

export default HeaderLinks;
