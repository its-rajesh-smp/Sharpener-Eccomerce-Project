import React from 'react';
import "./SideImageBar.css"

function SideImageBar(props) {
    return (
        <div className=' SideImageBar-div '>
            <img src={props.details.imageUrl} alt={props.details.name} />
            <img src={props.details.imageUrl} alt={props.details.name} />
            <img src={props.details.imageUrl} alt={props.details.name} />
            <img src={props.details.imageUrl} alt={props.details.name} />
            <img src={props.details.imageUrl} alt={props.details.name} />
        </div>
    );
}

export default SideImageBar;
