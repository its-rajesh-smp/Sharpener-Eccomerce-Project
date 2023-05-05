import React from 'react';
import "./CheckoutDelivery.css"
import CheckoutContainerNav from '../CheckoutContainerNav/CheckoutContainerNav';
import DeliveryAddressContainer from '../../../Delivery Address Container/DeliveryAddressContainer';

function CheckoutDelivery(props) {

    const onDeliveryContinueHandeler = () => {
        props.setShowField(2)
    }


    return (
        <div className=' CheckoutDelivery-div '>
            <CheckoutContainerNav step="1" for="DELIVERY ADDRESS" />
            {props.showField === 1 && <DeliveryAddressContainer />}
            {props.showField === 1 && <button onClick={onDeliveryContinueHandeler} className='paymentBtn'>CONTINUE</button>}

        </div>
    );
}

export default CheckoutDelivery;
