import React from 'react';
import "./ProductDetailsPage.css"
import ProductDetailsPageImage from '../../Components/Product Details Page Image/ProductDetailsPageImage';
import ProductDetailsPageData from '../../Components/UI/Product Details Page Data/ProductDetailsPageData';

function ProductDetailsPage(props) {
    return (
        <>
            <div className=' ProductDetailsPage-div container'>
                <ProductDetailsPageImage />
                <ProductDetailsPageData />
            </div>

        </>
    );
}

export default ProductDetailsPage;
