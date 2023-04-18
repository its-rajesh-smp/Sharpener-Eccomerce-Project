import React from 'react';
import "./LogoSection.css"
import { brandLogo } from '../../../../Assets/Assets';
import { brandName } from '../../../../Assets/Assets';

function LogoSection(props) {
    return (
        <div className=' LogoSection-div '>
            <img className='brandLogo' src={brandLogo} alt='brandLogo' />
            <h1 className='brandName'>{brandName}</h1>
        </div>
    );
}

export default LogoSection;
