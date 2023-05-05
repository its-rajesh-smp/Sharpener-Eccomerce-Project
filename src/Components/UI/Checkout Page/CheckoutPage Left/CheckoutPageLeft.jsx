import React, { useState } from 'react';
import "./CheckoutPageLeft.css"
import CheckoutDelivery from '../CheckoutDelivery/CheckoutDelivery';
import CheckoutOrderSummary from '../CheckoutOrderSummary/CheckoutOrderSummary';
import CheckoutPayment from '../CheckoutPayment/CheckoutPayment';


function CheckoutPageLeft(props) {

    const [showField, setShowField] = useState(1)


    return (
        <div className=' CheckoutPageLeft-div '>
            <CheckoutDelivery setShowField={setShowField} showField={showField} />
            <CheckoutOrderSummary showField={showField} setShowField={setShowField} />
            <CheckoutPayment showField={showField} setShowField={setShowField} />
        </div>
    );
}

export default CheckoutPageLeft;
