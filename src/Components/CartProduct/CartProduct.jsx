import React from 'react';
import "./CartProduct.css"
import CartProductDetails from '../UI/CartProduct/CartProductDetails/CartProductDetails';
import CartProductPricing from '../UI/CartProduct/CartProductPricing/CartProductPricing';

function CartProduct(props) {
    return (
        <div className=' CartProduct-div '>
            <img className='CartProduct-div_img' src={props.details.imageUrl} alt={props.details.name} />
            <CartProductDetails details={props.details} />
            <CartProductPricing details={props.details} />
        </div>
    );
}

export default CartProduct;
