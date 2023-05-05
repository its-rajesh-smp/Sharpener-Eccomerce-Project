import React from 'react';
import "./CheckoutPageLeft.css"
import CheckoutContainer from '../../../Checkout Container/CheckoutContainer';
import { useState } from 'react';

function CheckoutPageLeft(props) {

    const [showField, setShowField] = useState(1)


    return (
        <div className=' CheckoutPageLeft-div '>
            <CheckoutContainer for="DELIVERY ADDRESS" step="1" showField={showField} />
            <CheckoutContainer for="ORDER SUMMARY" step="2" showField={showField} />
        </div>
    );
}

export default CheckoutPageLeft;
