import React from 'react';
import "./DeliveryAddressContainer.css"
import DeliveryAddress from '../Delivery Address/DeliveryAddress';

function DeliveryAddressContainer(props) {
    return (
        <div className=' DeliveryAddressContainer-div '>
            <DeliveryAddress />
            <DeliveryAddress />
            <DeliveryAddress />
        </div>
    );
}

export default DeliveryAddressContainer;
