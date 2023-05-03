import React from 'react';
import "./ProductReviewContainer.css"
import ProductReview from '../UI/Product Review Container/Review/ProductReview';
import OverallReview from '../UI/Product Review Container/Overall Review/OverallReview';


function ProductReviewContainer(props) {
    return (
        <div className=' ProductReviewContainer-div '>
            <h1 className='ProductReviewContainer-div-h1' >Rating & Reviews</h1>

            <OverallReview />

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
