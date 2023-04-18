import React from 'react';
import "./CartProductDetails.css"

function CartProductDetails(props) {
    return (
        <div className=' CartProductDetails-div '>
            <p>BlackWhite Strip Collar</p>
            <p>Shirt</p>

            <div className='CartProductDetails-div_options'>
                <i className='bx bxs-message-square-x'></i>
                <i className='bx bxs-share-alt' ></i>
                <i className='bx bxs-heart' ></i>
            </div>


        </div>
    );
}

export default CartProductDetails;
