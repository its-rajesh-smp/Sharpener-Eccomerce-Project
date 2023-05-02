import React from 'react';
import "./ProductReview.css"

function ProductReview(props) {
    return (
        <div className=' ProductReview-div '>
            <p className='ProductReview-div_name'>santoshi chandra</p>
            <div className='ProductReview-div_rating'>
                <p>5.0⭐</p>
                <p>Posted on 3 Sep 2022</p>
            </div>
            <div className='ProductReview-div_comment'>
                <p>
                    Very nice product thanks meesho costumer is very happy 😊😊😊😊😊😊😊
                </p>
            </div>


            <button className='ProductReview-div_btnHelpfull'>Helpful (<span style={{ fontWeight: 600 }}>13</span>)</button>

        </div>
    );
}

export default ProductReview;
