import React, { useState } from 'react';

const CartCTX = React.createContext({
    addToCartArray: () => { },
    cartProductArray: []
})

export const CartCTXProvider = ({ children }) => {

    const [cartProductArray, setCartProductArray] = useState([])


    /* -------------------------------------------------------------------------- */
    /*                               Add To CartList                              */
    /* -------------------------------------------------------------------------- */
    const addToCartArray = (productData) => {
        // console.log(productData);
        setCartProductArray((prev) => {
            let isPresent = false
            const newArray = prev.map((val) => {
                if (val.name === productData.name) {
                    const newQuantity = val.quantity + productData.quantity
                    val.quantity = newQuantity
                    isPresent = true
                }
                return val
            })
            if (isPresent === true) { return newArray }
            else { return [productData, ...newArray] }

        })
    }



    return (
        <CartCTX.Provider value={{ cartProductArray, addToCartArray }}>
            {children}
        </CartCTX.Provider>
    )
}


export default CartCTX