import React from 'react';
import "./CartProduct.css"
import CartProductDetails from '../UI/CartProduct/CartProductDetails/CartProductDetails';
import CartProductPricing from '../UI/CartProduct/CartProductPricing/CartProductPricing';

function CartProduct(props) {
    return (
        <div className=' CartProduct-div '>
            <img className='CartProduct-div_img' src="https://cdn.josephturner.co.uk/Original/mens-navy-butcher-formal-striped-shirt-msbsnv_1.jpg" alt="shirt" />
            <CartProductDetails />
            <CartProductPricing />
        </div>
    );
}

export default CartProduct;
