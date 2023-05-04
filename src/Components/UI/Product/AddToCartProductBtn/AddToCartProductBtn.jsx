import React, { useContext, useEffect } from 'react';
import "./AddToCartProductBtn.css"
import CartCTX from '../../../../Context/CartCTX';
import { useState } from 'react';

function AddToCartProductBtn(props) {
    const cartContext = useContext(CartCTX)


    const [isAdded, setIsAdded] = useState(false)
    const [loader, setLoader] = useState(false)

    // Add To Cart On Button Click
    const addToCartOnBtnClick = () => {
        setLoader(true)
        const productData = {
            name: props.details.name,
            price: props.details.price,
            imageUrl: props.details.imageUrl,
            quantity: 1,
            id: props.details.id
        }

        cartContext.addToCartArray(productData, setIsAdded, setLoader)
    }




    return (
        <div className=' AddToCartProductBtn-div '>
            {(!isAdded && !loader) && < button onClick={addToCartOnBtnClick}>Add</button>}
            {loader && <button ><i className='bx bx-loader-circle bx-spin' ></i></button>}
            {isAdded && <button >ADDED TO CART</button>}
        </div >
    );
}

export default AddToCartProductBtn;
