import React from 'react';
import "./Product.css"
import ProductDetails from '../UI/Product/Product Details/ProductDetails';
import AddToCartProductBtn from '../UI/Product/AddToCartProductBtn/AddToCartProductBtn';
import { Link } from 'react-router-dom/cjs/react-router-dom';


function Product(props) {


    return (
        <div className=' Product-div '>

            <div className='Product__image_container'>
                <Link to={`/home/product/${props.details.id}`}>
                    <img className='Product__image' src={props.details.imageUrl} alt={props.details.name} />
                </Link>
            </div>
            <ProductDetails details={props.details} />
            <AddToCartProductBtn details={props.details} />

        </div>
    );
}

export default Product;
