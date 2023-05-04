import React, { useContext } from 'react';
import "./CartProductContainer.css"
import CartProduct from '../CartProduct/CartProduct';
import CartCTX from '../../Context/CartCTX';

function CartProductContainer(props) {

    const cartContext = useContext(CartCTX)


    return (
        <div className=' CartProductContainer-div '>
            {
                cartContext.cartProductArray.map((val) => {
                    return <CartProduct details={val} key={Math.random()} />
                })
            }
        </div>
    );
}

export default CartProductContainer;
