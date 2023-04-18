import React, { useContext } from 'react';
import "./CartProductContainer.css"
import CartProduct from '../CartProduct/CartProduct';
import CartCTX from '../../Context/CartCTX';

function CartProductContainer(props) {

    const cartProductArray = useContext(CartCTX)


    return (
        <div className=' CartProductContainer-div '>
            {
                cartProductArray.cartProductArray.map((val) => {
                    return <CartProduct details={val} key={Math.random()} />
                })
            }
        </div>
    );
}

export default CartProductContainer;
