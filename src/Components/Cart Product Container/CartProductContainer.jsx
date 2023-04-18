import React from 'react';
import "./CartProductContainer.css"
import CartProduct from '../CartProduct/CartProduct';

function CartProductContainer(props) {
    return (
        <div className=' CartProductContainer-div '>
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
        </div>
    );
}

export default CartProductContainer;
