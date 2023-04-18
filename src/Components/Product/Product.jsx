import React from 'react';
import "./Product.css"
import ProductDetails from '../UI/Product/Product Details/ProductDetails';
import AddToCartProductBtn from '../UI/Product/AddToCartProductBtn/AddToCartProductBtn';


function Product(props) {


    return (
        <div className=' Product-div '>

            <div className='Product__image_container'>
                <img className='Product__image' src={props.details.imageUrl} alt={props.details.name} />
            </div>
            <ProductDetails details={props.details} />
            <AddToCartProductBtn details={props.details} />

        </div>
    );
}

export default Product;
