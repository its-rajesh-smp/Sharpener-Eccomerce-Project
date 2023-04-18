import React, { useContext } from 'react';
import "./AddToCartProductBtn.css"
import CartCTX from '../../../../Context/CartCTX';

function AddToCartProductBtn(props) {
    const addToCartListCTX = useContext(CartCTX)


    // Add To Cart On Button Click
    const addToCartOnBtnClick = () => {
        const productData = {
            name: props.details.name,
            price: props.details.price,
            imageUrl: props.details.imageUrl,
            quantity: 1
        }
        addToCartListCTX.addToCartArray(productData)
    }


    return (
        <div className=' AddToCartProductBtn-div '>
            <button onClick={addToCartOnBtnClick} >Add</button>
        </div>
    );
}

export default AddToCartProductBtn;
