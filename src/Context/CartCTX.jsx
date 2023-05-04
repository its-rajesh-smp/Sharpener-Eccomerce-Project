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
    cartProductArray: [],
    cartTotal: {}
})

export const CartCTXProvider = ({ children }) => {

    const AllProductCTX = useContext(AllProductContext)
    const [cartProductArray, setCartProductArray] = useState([])
    const [cartTotal, setCartTotal] = useState([])


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
    const removeFromCartArray = async (productData) => {
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



        } catch (error) {
            alert(error)
            console.log(error);
        }
    }

    /* -------------------------------------------------------------------------- */
    /*                              DECREASE QUANTITY                             */
    /* -------------------------------------------------------------------------- */

    const decreaseProductQuantity = (productData) => {
        console.log(productData);
    }
    /* -------------------------------------------------------------------------- */
    /*                              INCREASE QUANTITY                             */
    /* -------------------------------------------------------------------------- */

    const increaseProductQuantity = (productData) => {
        console.log(productData);
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
                decreaseProductQuantity
            }}>
            {children}
        </CartCTX.Provider>
    )
}


export default CartCTX