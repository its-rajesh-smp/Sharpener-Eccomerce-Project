import React from 'react';
import "./LogoSection.css"
import { brandLogo } from '../../../../Assets/Assets';
import { brandName } from '../../../../Assets/Assets';
import { Link } from 'react-router-dom';

function LogoSection(props) {




    return (
        <Link to="/" className=' LogoSection-div '>
            <img className='brandLogo' src={brandLogo} alt='brandLogo' />
            <h1 className='brandName'>{brandName}</h1>
        </Link>
    );
}

export default LogoSection;
