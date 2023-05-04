import React from 'react';
import "./ContactUs.css"
import Helpcatagorie from '../../Components/UI/Contact Us Page/HelpNav/Helpcatagorie';
import ContactDetails from '../../Components/UI/Contact Us Page/Contact Details/ContactDetails';
import ContactForm from '../../Components/UI/Contact Us Page/Contact Form/ContactForm';
import FaqSection from '../../Components/UI/Contact Us Page/FAQ Section/FaqSection';

function ContactUs(props) {
    return (
        <div className=' ContactUs-div container '>

            <Helpcatagorie />
            <FaqSection />
            <div className='ContactUs-div_container'>
                <ContactForm />
                <ContactDetails />
            </div>

        </div>
    );
}

export default ContactUs;
