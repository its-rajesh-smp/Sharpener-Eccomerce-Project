import React from 'react';
import "./CartProductDetails.css"
import { useContext } from 'react';
import CartCTX from '../../../../Context/CartCTX';

function CartProductDetails(props) {

    const cartContext = useContext(CartCTX)

    // Remove from Cart
    const removeProductHandeler = () => {
        cartContext.removeFromCartArray(props.details)
    }



    return (
        <div className=' CartProductDetails-div '>
            <p>{props.details.name}</p>
            <p>Shirt</p>

            <div className='CartProductDetails-div_options'>
                <i onClick={removeProductHandeler} className='bx bxs-message-square-x'></i>
                <i className='bx bxs-share-alt' ></i>
                <i className='bx bxs-heart' ></i>
            </div>


        </div>
    );
}

export default CartProductDetails;
