import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'
import { FaWhatsappSquare } from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kzf0q4a', 'template_ddpt6f4', form.current, '77cIlHV0ETRqQ5wgq')
        e.target.reset();
    };
    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>manikantan.srinivasan2001<br />@gmail.com</h5>
                        <a href="mailto:manikantan.srinivasan2001@gmail.com">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsLinkedin className="contact__option-icon" />
                        <h4>Linkedin</h4>
                        <h5>Manikantan2001</h5>
                        <a href="https://www.linkedin.com/in/manikantan2001/">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <FaWhatsappSquare className="contact_option-icon" />
                        <h4>Whatsapp</h4>
                        <h5>+917021489477</h5>
                        <a href="https://api.whatsapp.com/send?phone=+917021489477">Send a message</a>
                    </article>
                </div>
                {/*End of contact options */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="text" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
