import React from 'react';
import "./ContactUs.css"
import Helpcatagorie from '../../Components/UI/HelpNav/Helpcatagorie';
import ContactDetails from '../../Components/UI/Contact Details/ContactDetails';
import ContactForm from "../../Components/UI/Contact Form/ContactForm"

function ContactUs(props) {
    return (
        <div className=' ContactUs-div '>
            <Helpcatagorie />

            <div className='ContactUs-div_container'>
                <ContactForm />
                <ContactDetails />
            </div>

        </div>
    );
}

export default ContactUs;
