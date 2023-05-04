import React, { useContext } from 'react';
import "./AddToCartProductBtn.css"
import CartCTX from '../../../../Context/CartCTX';
import { useState } from 'react';

function AddToCartProductBtn(props) {
    const cartContext = useContext(CartCTX)

    const [isAdded, setIsAdded] = useState(false)


    // Add To Cart On Button Click
    const addToCartOnBtnClick = () => {
        const productData = {
            name: props.details.name,
            price: props.details.price,
            imageUrl: props.details.imageUrl,
            quantity: 1,
            id: props.details.id
        }
        cartContext.addToCartArray(productData, setIsAdded)
    }




    return (
        <div className=' AddToCartProductBtn-div '>
            {!isAdded && <button onClick={addToCartOnBtnClick} >Add</button>}
            {isAdded && <button >ADDED TO CART</button>}
        </div>
    );
}

export default AddToCartProductBtn;
