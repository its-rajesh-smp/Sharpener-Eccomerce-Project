import React from 'react';
import "./CheckoutContainer.css"

import DeliveryAddressContainer from '../Delivery Address Container/DeliveryAddressContainer';
import CartProductContainer from '../Cart Product Container/CartProductContainer';

function CheckoutContainer(props) {






    if (props.showField == 1) {
        return (<div className=' CheckoutContainer-div '>
            <div className='CheckoutContainer-div__topBar'>
                <p>{props.step}</p>
                <p>{props.for}</p>
            </div>

            <div className='CheckoutContainer-div_container'>
                <DeliveryAddressContainer />
            </div>
        </div>)
    }



    else if (props.showField === 2) {
        <div className=' CheckoutContainer-div '>
            <div className='CheckoutContainer-div__topBar'>
                <p>{props.step}</p>
                <p>{props.for}</p>
            </div>

            <div className='CheckoutContainer-div_container'>

                <CartProductContainer />

            </div>

        </div>
    }

}

export default CheckoutContainer;
