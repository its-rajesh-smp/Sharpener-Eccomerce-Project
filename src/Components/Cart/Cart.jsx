import React from 'react';
import "./Cart.css"
// Components
import CartDetails from '../UI/Cart/CartDetails/CartDetails';
import CartProductContainer from '../Cart Product Container/CartProductContainer';

function Cart(props) {

    return (
        <div className={`Cart-div slide`}>
            <CartDetails />
            <CartProductContainer />
        </div>
    );
}

export default Cart;
