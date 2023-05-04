import React, { useRef, useState } from "react";
import "./ContactForm.css";
import { CONTACT_US_FIREBASE_API } from "../../../../Assets/Assets";

function ContactForm(props) {

    const [loader, setLoader] = useState(false)
    const [sendsuccess, setSendSuccess] = useState(false)
    const [sendNotSuccess, setSendNotSuccess] = useState(false)


    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const subjectRef = useRef()
    const messageRef = useRef()


    const onClickFormSubmit = async (e) => {
        e.preventDefault()
        console.log("sd");
        setLoader(true)
        const formData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            subject: subjectRef.current.value,
            message: messageRef.current.value
        }

        try {
            await fetch(`${CONTACT_US_FIREBASE_API}.json`, {
                method: "POST",
                body: JSON.stringify(formData)
            })

            setLoader(false)
            setSendSuccess(true)
            setTimeout(function () {
                setSendSuccess(false)
            }, 3000);

        } catch (error) {
            console.log(error);
            setLoader(false)
            setSendNotSuccess(true)
            setTimeout(function () {
                setSendNotSuccess(false)
            }, 3000);
        }


    }




    return (
        <div className=" ContactForm-div ">
            <h3>Send your request</h3>
            <form>
                <div>
                    <input ref={nameRef} className="contactForm_input" type="text" placeholder="Name" />
                    <input
                        ref={phoneRef}
                        className="contactForm_input"
                        type="text"
                        placeholder="Phone Number"
                    />
                </div>

                <div>
                    <input
                        ref={emailRef}
                        className="contactForm_input"
                        type="text"
                        placeholder="Email"
                    />
                    <input
                        ref={subjectRef}
                        className="contactForm_input"
                        type="text"
                        placeholder="Subject"
                    />
                </div>

                <div>
                    <input
                        ref={messageRef}
                        className="contactForm_input contactForm_input_message"
                        type="text"
                        placeholder="Your Message"
                    />
                </div>

                {
                    loader === true ?
                        <button onClick={(e) => e.preventDefault()}><i className='bx bx-loader-circle bx-spin' ></i></button> :
                        sendsuccess === true ?
                            <button onClick={(e) => e.preventDefault()}>SENDED✅</button> :
                            sendNotSuccess === true ?
                                <button onClick={(e) => e.preventDefault()}>ERROR ❎</button> :
                                <button onClick={onClickFormSubmit}>SEND</button>
                }

            </form>
        </div>
    );
}

export default ContactForm;
