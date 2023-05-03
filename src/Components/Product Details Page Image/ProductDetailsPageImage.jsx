import React from 'react';
import "./ProductDetailsPageImage.css"
import SideImageBar from '../UI/Product Details Page Image/Side Image Bar/SideImageBar';
import MainProductImage from '../UI/Product Details Page Image/Main Product Image/MainProductImage';

function ProductDetailsPageImage(props) {

    return (
        <div className=' ProductDetailsPageImage-div '>
            <div className='ProductDetailsPageImage-div_container'>
                <SideImageBar details={props.details} />
                <MainProductImage details={props.details} />
            </div>
        </div>
    );
}

export default ProductDetailsPageImage;
