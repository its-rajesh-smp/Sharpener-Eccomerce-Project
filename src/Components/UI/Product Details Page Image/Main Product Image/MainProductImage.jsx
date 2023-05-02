import React from 'react';
import "./MainProductImage.css"

function MainProductImage(props) {
    return (
        <div className=' MainProductImage-div '>

            <div style={{ overflow: "hidden" }}>
                <img src='https://cdn.josephturner.co.uk/Original/mens-navy-butcher-formal-striped-shirt-msbsnv_1.jpg' alt='Product' />
            </div>

            <div className='MainProductImage-div_btnContainer'>
                <button>ADD TO CART</button>
                <button>BUY NOW</button>
            </div>
        </div>
    );
}

export default MainProductImage;
