import React from 'react';
import "./ContactDetails.css"

function ContactDetails(props) {
    return (
        <div className=' ContactDetails-div '>
            <h3>Reach Us</h3>
            <div className='ContactDetails-div_div'>
                <p>Email</p>
                <p>123@gmail.com</p>
            </div>
            <div className='ContactDetails-div_div'>
                <p>Phone</p>
                <p>+1 012345678910</p>
            </div>
            <div className='ContactDetails-div_div'>
                <p>Address</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam fugiat maiores architecto? Repellat vel, porro unde pariatur vero provident impedit sit numquam, quod cum quia accusantium et ea consectetur! Unde.</p>
            </div>

        </div>
    );
}

export default ContactDetails;
