import React, { useState } from 'react';

const CartCTX = React.createContext({
    addToCartArray: () => { },
    setCartTotal: () => { },
    removeFromCartArray: () => { },
    cartProductArray: [],
    cartTotal: {}
})

export const CartCTXProvider = ({ children }) => {

    const [cartProductArray, setCartProductArray] = useState([])

    const [cartTotal, setCartTotal] = useState({ price: 0, quantity: 0 })

    /* -------------------------------------------------------------------------- */
    /*                               Add To CartList                              */
    /* -------------------------------------------------------------------------- */
    const addToCartArray = (productData) => {
        console.log(productData);
    }


    /* -------------------------------------------------------------------------- */
    /*                            REMOVE FROM CARTLIST                            */
    /* -------------------------------------------------------------------------- */
    const removeFromCartArray = (productData) => {
        console.log(productData);
    }

    /* -------------------------------------------------------------------------- */
    /*                              DECREASE QUANTITY                             */
    /* -------------------------------------------------------------------------- */

    const decreaseProductQuantity = (productData) => {
        console.log(productData);
    }







    return (
        <CartCTX.Provider value={{ cartProductArray, addToCartArray, setCartTotal, cartTotal, removeFromCartArray }}>
            {children}
        </CartCTX.Provider>
    )
}


export default CartCTX