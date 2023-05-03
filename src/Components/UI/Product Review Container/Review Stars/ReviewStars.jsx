import React from 'react';
import "./ReviewStars.css"

function ReviewStars(props) {
    return (
        <div className=' ReviewStars-div '>
            <div className='ReviewStars-div_container'>
                <i className='bx bx-star'></i>
                <i className='bx bx-star'></i>
                <i className='bx bx-star'></i>
                <i className='bx bx-star'></i>
                <i className='bx bx-star'></i>
            </div>
        </div>
    );
}

export default ReviewStars;
