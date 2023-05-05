import React from 'react';
import "./CheckoutContainerNav.css"

function CheckoutContainerNav(props) {
    return (
        <div className='CheckoutContainerNav-div'>
            <p>{props.step}</p>
            <p>{props.for}</p>
        </div>

    );
}

export default CheckoutContainerNav;
