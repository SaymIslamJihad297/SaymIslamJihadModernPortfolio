import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.css';

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    alert('Message sent successfully! ✅');
                    form.current.reset();
                },
                (error) => {
                    alert('Failed to send message. ❌');
                    console.error('EmailJS Error:', error);
                }
            );
    };

    return (
        <div className="form-wrapper">
            <div className="form-container">
                <form ref={form} onSubmit={sendEmail} className="form">
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input required name="user_email" id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea required id="message" name="message" placeholder="Write your message..."></textarea>
                    </div>
                    <button type="submit" className="form-submit-btn">Send Email</button>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;
