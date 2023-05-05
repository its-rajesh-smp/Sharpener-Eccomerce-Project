import React from 'react';
import "./Checkout.css"
import CheckoutPageLeft from '../../Components/UI/Checkout Page/CheckoutPage Left/CheckoutPageLeft';
import CheckoutPageRight from '../../Components/UI/Checkout Page/CheckoutPage Right/CheckoutPageRight';

function Checkout(props) {
    return (
        <div className='container Checkout-div '>
            <CheckoutPageLeft />
            <CheckoutPageRight />
        </div>
    );
}

export default Checkout;
