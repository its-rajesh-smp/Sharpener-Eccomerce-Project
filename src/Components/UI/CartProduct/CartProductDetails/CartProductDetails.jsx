import React from 'react';
import "./CartProductDetails.css"
import { useContext } from 'react';
import CartCTX from '../../../../Context/CartCTX';
import { useState } from 'react';

function CartProductDetails(props) {

    const cartContext = useContext(CartCTX)

    const [loader, setLoader] = useState(false)

    // Remove from Cart
    const removeProductHandeler = () => {
        setLoader(true)
        cartContext.removeFromCartArray(props.details, setLoader)
    }



    return (
        <div className=' CartProductDetails-div '>
            <p>{props.details.name}</p>
            <p>Shirt</p>

            <div className='CartProductDetails-div_options'>

                {!loader ? <i onClick={removeProductHandeler} className='bx bxs-message-square-x'></i> : <i className='bx bx-loader-circle bx-spin' ></i>}
                <i className='bx bxs-share-alt' ></i>
                <i className='bx bxs-heart' ></i>

            </div>


        </div>
    );
}

export default CartProductDetails;
