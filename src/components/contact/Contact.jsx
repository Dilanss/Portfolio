import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com'

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_rt0a42g', 'template_j9at16n', form.current, '')
    }
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>dilanjimenez208@gmail.com</h5>
                        <a href="mailto:dilanjimenez208@gmail.com">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsLinkedin className='contact__option-icon'/>
                        <h4>Linkedin</h4>
                        <h5>Dilan</h5>
                        <a href="https://linkedin.com">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>Whatsapp</h4>
                        <h5>+57-3142915938</h5>
                        <a href="https://api.whatsapp.com/send?phone=+5721312312">Send a message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;
