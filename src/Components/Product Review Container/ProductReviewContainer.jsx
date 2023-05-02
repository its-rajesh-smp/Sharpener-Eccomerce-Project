import React from 'react';
import "./ProductReviewContainer.css"
import ProductReview from '../UI/Product Review Container/Review/ProductReview';


function ProductReviewContainer(props) {
    return (
        <div className=' ProductReviewContainer-div '>
            <h1 className='ProductReviewContainer-div-h1' >Rating & Reviews</h1>
            <ProductReview />
            <ProductReview />
            <ProductReview />
            <ProductReview />
            <ProductReview />
            <ProductReview />
            <ProductReview />
            <ProductReview />
        </div>

    );
}

export default ProductReviewContainer;
