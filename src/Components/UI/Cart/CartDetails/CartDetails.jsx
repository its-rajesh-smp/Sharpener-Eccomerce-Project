import React from 'react';
import "./CartDetails.css"

function CartDetails(props) {
    return (
        <div className=' CartDetails-div '>
            <p>Total: <span>10000</span> $</p>
            <i className='bx bx-cart' > <span style={{ fontFamily: "roboto" }}> Your Cart</span></i>
            <p>Quantity: <span>10</span></p>
        </div>
    );
}

export default CartDetails;
