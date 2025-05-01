import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../stylesheet/contact.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_4lu1g98',// YOUR_SERVICE_ID from Email JS
      'template_wpa6gzp',// YOUR_TEMPLATE_ID from Eamil JS
      form.current,
      '-x9ynhCcwit4wCbFa'// YOUR_PUBLIC_KEY from Email JS
    ).then(
      (result) => {
        // console.log(result)
        alert('✅ Message sent successfully!');
      },
      (error) => {
        // console.log(error)
        alert('❌ Failed to send message.');
      }
    );
    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Let’s connect! Feel free to reach out for collaborations or just a friendly hello.</p>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-row">
            <input type="text" name="user_name" placeholder="Full Name" required />
            <input type="email" name="user_email" placeholder="Email Address" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
          </div>
            <button type="submit">📧 Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
