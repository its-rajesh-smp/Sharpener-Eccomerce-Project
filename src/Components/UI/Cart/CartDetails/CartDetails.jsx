import React, { useContext } from 'react';
import "./CartDetails.css"
import CartCTX from '../../../../Context/CartCTX';

function CartDetails(props) {

    const cartTotal = useContext(CartCTX)

    return (
        <div className=' CartDetails-div '>
            <p>Total: <span>{cartTotal.cartTotal.price}</span> $</p>
            <i className='bx bx-cart' > <span style={{ fontFamily: "roboto" }}> Your Cart</span></i>
            <p>Quantity: <span>{cartTotal.cartTotal.quantity}</span></p>
        </div>
    );
}

export default CartDetails;
