import React from 'react';
import "./ProductDetailsPage.css"
import ProductDetailsPageImage from '../../Components/Product Details Page Image/ProductDetailsPageImage';
import ProductDetailsPageData from '../../Components/UI/Product Details Page Data/ProductDetailsPageData';
import { productsArr } from '../../Data/data';
import { useParams } from 'react-router-dom/cjs/react-router-dom';

function ProductDetailsPage(props) {

    const parm = useParams()

    // Matching the product with url id
    const currentProduct = productsArr.find((product) => {
        return (product.id === +parm.productId)
    })



    return (
        <>
            <div className=' ProductDetailsPage-div container'>
                <ProductDetailsPageImage details={currentProduct} />
                <ProductDetailsPageData details={currentProduct} />
            </div>

        </>
    );
}

export default ProductDetailsPage;
