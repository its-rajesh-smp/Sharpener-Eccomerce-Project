import React, { useState } from 'react';

const CartCTX = React.createContext({
    addToCartArray: () => { },
    setCartTotal: () => { },
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
        setCartTotal((prev) => {
            return { price: prev.price + productData.price, quantity: prev.quantity + productData.quantity }
        })

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
        <CartCTX.Provider value={{ cartProductArray, addToCartArray, setCartTotal, cartTotal }}>
            {children}
        </CartCTX.Provider>
    )
}


export default CartCTX