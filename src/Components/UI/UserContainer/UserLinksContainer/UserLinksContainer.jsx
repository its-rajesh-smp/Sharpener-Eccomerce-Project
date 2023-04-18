import React from 'react';
import "./UserLinksContainer.css"
import UserLinks from '../UserLinks/UserLinks';

function UserLinksContainer(props) {
    return (
        <div className=' UserLinksContainer-div '>
            <UserLinks icon={<i className='bx bx-receipt'></i>} name="My Order" link="#" />
            <UserLinks icon={<i className='bx bxs-edit-location'></i>} name="My Address" link="#" />
            <UserLinks icon={<i className='bx bxs-user-account' ></i>} name="My Account" link="#" />
            <UserLinks icon={<i className='bx bxs-heart' ></i>} name="My Wishlist" link="#" />
            <UserLinks icon={<i className='bx bxs-offer' ></i>} name="My Offers" link="#" />

            <UserLinks icon={<i className='bx bxs-log-out'></i>} name="Logout" link="#" />
        </div>
    );
}

export default UserLinksContainer;
