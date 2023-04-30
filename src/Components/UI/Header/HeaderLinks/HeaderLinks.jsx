import React, { useContext } from 'react';
import "./HeaderLinks.css"
import HeaderLinksCTX from '../../../../Context/HeaderLinksCTX';
import CartCTX from '../../../../Context/CartCTX';
import { Link } from 'react-router-dom';

function HeaderLinks(props) {

    // Toggle Cart
    const linkClick = useContext(HeaderLinksCTX)
    const cartTotal = useContext(CartCTX)

    const onCartBtnClick = () => {
        linkClick.toggleCart()
    }

    const onUserBtnClick = () => {
        linkClick.toggleUser()
    }







    return (
        <div className=' HeaderLinks-div '>

            <Link to="/contactus"><i className='bx bx-support'></i></Link>
            <Link to="/notification"><i className='bx bx-bell'></i></Link>


            <div onClick={onCartBtnClick} className='cart'>
                <i className='bx bx-cart-alt'></i>
                <p className='cartQuantity'>{cartTotal.cartTotal.quantity}</p>
            </div>

            <i onClick={onUserBtnClick} className='bx bx-user'></i>

        </div>
    );
}

export default HeaderLinks;
