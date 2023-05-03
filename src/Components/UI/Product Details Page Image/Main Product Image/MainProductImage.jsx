import React from 'react';
import "./MainProductImage.css"

function MainProductImage(props) {
    return (
        <div className=' MainProductImage-div '>

            <div style={{ overflow: "hidden" }}>
                <img src={props.details.imageUrl} alt={props.details.name} />
            </div>

            <div className='MainProductImage-div_btnContainer'>
                <button>ADD TO CART</button>
                <button>BUY NOW</button>
            </div>
        </div>
    );
}

export default MainProductImage;
