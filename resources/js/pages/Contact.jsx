import React from 'react';
import './Contacts.css';
import HomeLayout from '../layouts/HomeLayout';

const Contact = () => {
    return (
        <HomeLayout><div className="contact-container">
        <h1>Any queries?</h1>
        <p>If you have any inquiries, don't hesitate to get in touch with me via the form below or through my contact information below.</p>
        <form className="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Submit</button>
        </form>
        <div className="contact-details">
            <h2>Contact Details</h2>
            <p>Email: kusumlimbu75@gmail.com</p>
            <p>Phone: 9876543212</p>
            <p>Address:Pathari -02, Morang</p>
        </div>
    </div></HomeLayout>
        
    );
};

export default Contact;
