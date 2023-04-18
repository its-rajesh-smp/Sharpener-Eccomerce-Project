import React from 'react';
import "./HeaderFilter.css"

function HeaderFilter(props) {
    return (
        <div className=' HeaderFilter-div '>
            <select className='HeaderChata'>
                <option>All</option>
                <option>Laptop</option>
                <option>Mobile</option>
                <option>Cloaths</option>
            </select>
        </div>
    );
}

export default HeaderFilter;
