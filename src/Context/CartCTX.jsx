import React, { useState } from 'react';
import { CART_FIREBASE_APIKEY } from '../Assets/Assets';
import { useContext } from 'react';
import AllProductContext from './AllProductCTX';
import { useEffect } from 'react';

const CartCTX = React.createContext({
    addToCartArray: () => { },
    setCartTotal: () => { },
    removeFromCartArray: () => { },
    decreaseProductQuantity: () => { },
    increaseProductQuantity: () => { },
    placeOrder: () => { },
    cartProductArray: [],
    cartTotal: {}
})

export const CartCTXProvider = ({ children }) => {

    const AllProductCTX = useContext(AllProductContext)
    const [cartProductArray, setCartProductArray] = useState([])
    const [cartTotal, setCartTotal] = useState({ price: 0, quantity: 0 })


    /* -------------------------------------------------------------------------- */
    /*                      GETTING DATA FROM ALL PRODUCT CTX                     */
    /* -------------------------------------------------------------------------- */


    useEffect(() => {
        setCartProductArray(AllProductCTX.cartProducts)
        setCartTotal(AllProductCTX.cartTotal)
    }, [AllProductCTX.cartTotal, AllProductCTX.cartProducts])



    /* -------------------------------------------------------------------------- */
    /*                               Add To CartList                              */
    /* -------------------------------------------------------------------------- */
    const addToCartArray = async (productData, setIsAdded, setLoader) => {

        let isAdded = false
        cartProductArray.forEach((product) => {
            if (product.id === productData.id) {
                isAdded = true
                setLoader(false)
                setIsAdded(true)
                setTimeout(function () {
                    setIsAdded(false)
                }, 3000);
                return
            }
        })

        if (!isAdded) {
            try {
                const response = await fetch(`${CART_FIREBASE_APIKEY}/${productData.id}.json`, {
                    method: "PUT",
                    body: JSON.stringify(productData)
                })
                const data = await response.json()

                if (!response.ok) {
                    throw new Error(data.error.message)
                }

                setCartProductArray((prev) => {
                    return [productData, ...prev]
                })

                setCartTotal((prev) => {
                    return { price: prev.price + productData.price, quantity: prev.quantity + productData.quantity }
                })

                setLoader(false)
                setIsAdded(true)
                setTimeout(function () {
                    setIsAdded(false)
                }, 3000);


            } catch (error) {
                alert(error)
                console.log(error);
                setLoader(false)
            }
        }

    }


    /* -------------------------------------------------------------------------- */
    /*                            REMOVE FROM CARTLIST                            */
    /* -------------------------------------------------------------------------- */
    const removeFromCartArray = async (productData, setLoader) => {
        try {
            const response = await fetch(`${CART_FIREBASE_APIKEY}/${productData.id}.json`, {
                method: "DELETE"
            })
            const data = await response.json()
            if (!response.ok) {
                throw new Error(data.error.message)
            }
            setCartProductArray((prev) => {
                return prev.filter((cartProduct) => {
                    return cartProduct.id !== productData.id
                })
            })

            setCartTotal((prev) => {
                return { price: prev.price - productData.price * productData.quantity, quantity: prev.quantity - productData.quantity }
            })

        } catch (error) {
            alert(error)
            console.log(error);
        }
        setLoader(false)

    }


    /* -------------------------------------------------------------------------- */
    /*                              DECREASE QUANTITY                             */
    /* -------------------------------------------------------------------------- */

    const decreaseProductQuantity = async (productData, setLoader) => {

        if (productData.quantity === 1) {
            removeFromCartArray(productData)
            return
        }
        try {
            const response = await fetch(`${CART_FIREBASE_APIKEY}/${productData.id}.json`, {
                method: "PATCH",
                body: JSON.stringify({ quantity: productData.quantity - 1 })
            })
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error.message)
            }

            setCartProductArray((prev) => {
                return prev.map((product) => {
                    if (product.id === productData.id) {
                        product.quantity -= 1
                    }
                    return product
                })
            })


            setCartTotal((prev) => {
                return { price: prev.price - productData.price, quantity: prev.quantity - 1 }
            })

        } catch (error) {
            console.log(error);
        }
    }


    /* -------------------------------------------------------------------------- */
    /*                              INCREASE QUANTITY                             */
    /* -------------------------------------------------------------------------- */

    const increaseProductQuantity = async (productData, setLoader) => {
        try {
            const response = await fetch(`${CART_FIREBASE_APIKEY}/${productData.id}.json`, {
                method: "PATCH",
                body: JSON.stringify({ quantity: productData.quantity + 1 })
            })
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error.message)
            }

            setCartProductArray((prev) => {
                return prev.map((product) => {
                    if (product.id === productData.id) {
                        product.quantity += 1
                    }
                    return product
                })
            })

            setCartTotal((prev) => {
                return { price: prev.price + productData.price, quantity: prev.quantity + 1 }
            })

            setLoader(false)

        } catch (error) {
            setLoader(false)
            console.log(error);
        }
    }

    /* -------------------------------------------------------------------------- */
    /*                                 PLACE ORDER                                */
    /* -------------------------------------------------------------------------- */

    const placeOrder = async () => {
        try {
            const response = await fetch(`${CART_FIREBASE_APIKEY}.json`, { method: "DELETE" })
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error.message)
            }

            console.log("ORDER PLACED");
            setCartTotal({ price: 0, quantity: 0 })
            setCartProductArray([])

        } catch (error) {
            alert(error);
            console.log(error);
        }
    }




    return (
        <CartCTX.Provider value={
            {
                cartProductArray,
                addToCartArray,
                setCartTotal,
                cartTotal,
                removeFromCartArray,
                increaseProductQuantity,
                placeOrder,
                decreaseProductQuantity
            }}>
            {children}
        </CartCTX.Provider>
    )
}


export default CartCTX