import React from 'react';
import "./CheckoutOrderSummary.css"
import CheckoutContainerNav from '../CheckoutContainerNav/CheckoutContainerNav';
import CartProductContainer from '../../../Cart Product Container/CartProductContainer';

function CheckoutOrderSummary(props) {

    const onDeliveryContinueHandeler = () => {
        props.setShowField(3)
    }


    return (
        <div className=' CheckoutOrderSummary-div '>
            <CheckoutContainerNav step="2" for="ORDER SUMMARY" />
            {props.showField === 2 && <CartProductContainer />}
            {props.showField === 2 && <button onClick={onDeliveryContinueHandeler} className='paymentBtn'>CONTINUE</button>}
        </div>
    );
}

export default CheckoutOrderSummary;
