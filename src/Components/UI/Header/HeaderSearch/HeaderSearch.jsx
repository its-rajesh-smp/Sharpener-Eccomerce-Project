import React from 'react';
import "./HeaderSearch.css"
import HeaderFilter from '../HeaderFilter/HeaderFilter';

function HeaderSearch(props) {
    return (
        <div className=' HeaderSearch-div '>
            <HeaderFilter />

            <input className='Header__SearchBar' type='text' placeholder='Search Your Products' />

            <button className='Header__SearchButton'>
                <i className='bx bx-search-alt'></i>
            </button>
        </div>
    );
}

export default HeaderSearch;
