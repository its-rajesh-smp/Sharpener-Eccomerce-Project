import React from 'react';
import "./Notification.css"
import PrimaryHeader from '../../Components/Header/PrimaryHeader';

function Notification(props) {
    return (
        <div className=' Notification-div '>
            <PrimaryHeader />
            <h1>No Notification Present</h1>
        </div>
    );
}

export default Notification;
