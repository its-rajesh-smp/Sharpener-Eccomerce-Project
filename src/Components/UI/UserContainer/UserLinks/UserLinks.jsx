import React from 'react';
import "./UserLinks.css"

function UserLinks(props) {



    return (
        <div className=' UserLinks-div '>
            <button onClick={props.onClick}>
                {props.icon}
                {props.name}
                <i className='bx bx-chevron-right'></i>
            </button>
        </div>
    );
}

export default UserLinks;
