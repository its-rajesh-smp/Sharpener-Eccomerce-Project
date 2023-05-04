import React, { useState, useEffect } from 'react';
import { PRODUCT_FIREBASE_APIKEY, CART_FIREBASE_APIKEY } from '../Assets/Assets';






const AllProductContext = React.createContext({
    allProductArray: [],
    cartProducts: [],
    setAllProductArray: () => { },
    setCartProducts: () => { },
    cartTotal: () => { },
    cartTotal: { price: 0, quantity: 0 }
})

export const AllProductContextProvider = ({ children }) => {

    const [allProductArray, setAllProductArray] = useState([])
    const [cartProducts, setCartProducts] = useState([])
    const [cartTotal, setCartTotal] = useState({ price: 0, quantity: 0 })

    /* -------------------------------------------------------------------------- */
    /*                               GET ALL PRODUCT                              */
    /* -------------------------------------------------------------------------- */
    useEffect(() => {
        async function fetchAllProduct() {
            try {
                const allProductResponse = await fetch(PRODUCT_FIREBASE_APIKEY + ".json")
                const allProductList = await allProductResponse.json()

                const cartProductResponse = await fetch(CART_FIREBASE_APIKEY + ".json")
                const cartProductList = await cartProductResponse.json()

                if (!allProductResponse.ok) {
                    throw new Error(allProductList.error.message)
                }
                else if (!cartProductResponse) {
                    throw new Error(cartProductList.error.message)
                }

                // CART DATA + ALL PRODUCT DATA === NEW PRODUCT DATA

                const newProductList = []
                const newCartList = []
                const newCartTotal = { price: 0, quantity: 0 }

                // Looping And Pushing Products in array
                for (const key in allProductList) {
                    allProductList[key].id = key

                    if (cartProductList !== null && cartProductList[key]) {
                        allProductList[key].quantity = cartProductList[key].quantity
                    }
                    else {
                        allProductList[key].quantity = 0
                    }
                    newProductList.push(allProductList[key])
                }

                if (cartProductList !== null) {
                    for (const key in cartProductList) {
                        newCartList.push(cartProductList[key])
                        newCartTotal.price += cartProductList[key].price
                        newCartTotal.quantity += cartProductList[key].quantity
                    }
                }

                setAllProductArray(newProductList)
                setCartProducts(newCartList)
                setCartTotal(newCartTotal)

            } catch (error) {
                console.log(error);
            }
        }
        fetchAllProduct()
    }, [])





    return (
        <AllProductContext.Provider value={{ allProductArray, cartTotal, cartProducts, setAllProductArray }}>
            {children}
        </AllProductContext.Provider>
    )
}

export default AllProductContext