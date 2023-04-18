import React from 'react';
import "./CartProductPricing.css"

function CartProductPricing(props) {
    return (
        <div className=' CartProductPricing-div '>

            <button className='CartProductPricing-div_quantityControll'>
                <p>-</p>
                <p>{"0"}</p>
                <p>+</p>
            </button>

            <p style={{ fontSize: "14px", textDecoration: "line-through" }} ><span>{props.details.price}</span> $</p>
            <p style={{ fontSize: "16px", color: "red" }} ><span>1000</span> $</p>
            <p>1</p>
            <p><span>1000</span> x <span>{props.details.quantity}</span> = <span>1000</span> $</p>


        </div>
    );
}

export default CartProductPricing;
