import React, { useContext } from 'react';
import "./CartProductContainer.css"
import CartProduct from '../CartProduct/CartProduct';
import CartCTX from '../../Context/CartCTX';

function CartProductContainer(props) {

    const cartContext = useContext(CartCTX)

    const onPlaceBtnClickHandeler = () => {
        cartContext.placeOrder()
    }


    return (
        <div className=' CartProductContainer-div '>
            {
                cartContext.cartProductArray.map((val) => {
                    return <CartProduct details={val} key={Math.random()} />
                })
            }
            {cartContext.cartProductArray.length > 0 ?
                <button onClick={onPlaceBtnClickHandeler} className='paymentBtn'>PLACE ORDER</button> : <h1>CART IS EMPTY</h1>
            }

        </div>
    );
}

export default CartProductContainer;
