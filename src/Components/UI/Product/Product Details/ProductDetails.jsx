import React from 'react';
import "./ProductDetails.css"

function ProductDetails(props) {



    return (
        <div className=' ProductDetails-div '>
            <p>{props.details.name}</p>

            <div className='ProductDetails-div_pricing'>
                <p style={{ fontSize: "14px", textDecoration: "line-through" }}><span style={{ fontWeight: 600 }}>{props.details.price + 2000}</span>$</p>

                <p style={{ color: "red" }}><span style={{ fontWeight: 600 }}>{props.details.price}</span>$</p>
            </div>

            <p>⭐⭐⭐⭐⭐</p>
        </div>
    );
}

export default ProductDetails;
