import React from 'react';
import "./ProductDetailsPage.css"
import ProductDetailsPageImage from '../../Components/Product Details Page Image/ProductDetailsPageImage';
import ProductDetailsPageData from '../../Components/UI/Product Details Page Data/ProductDetailsPageData';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { useContext } from 'react';
import AllProductContext from '../../Context/AllProductCTX';

function ProductDetailsPage(props) {

    const AllProductCTX = useContext(AllProductContext)

    const parm = useParams()

    // Matching the product with url_Id
    const currentProduct = AllProductCTX.allProductArray.find((product) => {
        return (product.id == parm.productId)
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
