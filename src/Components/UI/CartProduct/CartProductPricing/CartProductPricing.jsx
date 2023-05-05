import React from 'react';
import "./CartProductPricing.css"
import { useState, useContext } from 'react';
import CartCTX from '../../../../Context/CartCTX';

function CartProductPricing(props) {

    const cartContext = useContext(CartCTX)
    const [loader, setLoader] = useState(false)


    // Increase Quantity
    const increaseQuantityHandeler = () => {
        setLoader(true)
        cartContext.increaseProductQuantity(props.details, setLoader)
    }

    // Decrease Quantity
    const decreaseQuantityHandeler = () => {
        setLoader(true)
        cartContext.decreaseProductQuantity(props.details, setLoader)
    }




    return (
        <div className=' CartProductPricing-div '>

            <button className='CartProductPricing-div_quantityControll'>
                <p onClick={decreaseQuantityHandeler}>-</p>

                {!loader ? <p>{props.details.quantity}</p> : <i className='bx bx-loader-circle bx-spin' ></i>}

                <p onClick={increaseQuantityHandeler} >+</p>
            </button>

            <p style={{ fontSize: "14px", textDecoration: "line-through" }} ><span>{props.details.price + 2000}</span> $</p>
            <p style={{ fontSize: "16px", color: "red" }} ><span>{props.details.price}</span> $</p>
            <p>{props.details.quantity}</p>
            <p><span>{props.details.price}</span> x <span>{props.details.quantity}</span> = <span>{props.details.quantity * props.details.price}</span> $</p>


        </div>
    );
}

export default CartProductPricing;
