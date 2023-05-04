import React from 'react';
import "./CartProductPricing.css"

function CartProductPricing(props) {



    return (
        <div className=' CartProductPricing-div '>

            <button className='CartProductPricing-div_quantityControll'>
                <p>-</p>
                <p>{props.details.quantity}</p>
                <p>+</p>
            </button>

            <p style={{ fontSize: "14px", textDecoration: "line-through" }} ><span>{props.details.price + 2000}</span> $</p>
            <p style={{ fontSize: "16px", color: "red" }} ><span>{props.details.price}</span> $</p>
            <p>{props.details.quantity}</p>
            <p><span>{props.details.price}</span> x <span>{props.details.quantity}</span> = <span>{props.details.quantity * props.details.price}</span> $</p>


        </div>
    );
}

export default CartProductPricing;
