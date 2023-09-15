import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID,form.current,import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      // Set the input fields' values to empty strings.
    form.current.reset();
  };


  return (
    <div>
      <section id="contact">
  <article className="contact-box">
    <div className="contact-links">
      <h3>We Are Social</h3>
      <div className="links">
       
        <div className="link">
          <a><i className="inst fa-brands fa-square-facebook"></i></a>
        </div>
        <div className="link">
          <a><i className=" fb fa-brands fa-square-instagram"></i></a>
        </div>
        <div className="link">
          <a href='https://wa.me/+255688410445' target='blank'><i className=" wa fa-brands fa-whatsapp"></i></a>
        </div>
        
      </div>
    </div>
    <div className="contact-form-wrapper">
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-item">
          <input type="text" name="sender" required />
          <label>Name:</label>
        </div>
        <div className="form-item">
          <input type="text" name="email" required />
          <label>Email:</label>
        </div>
        
        <div className="form-item">
          <textarea className="" name="message" required></textarea>
          <label>Message:</label>
        </div>
        <button type='submit' value="Send" className="submit-btn"><i className="fa-regular fa-envelope"></i> Send</button>  
      </form>
    </div>
  </article>
</section>
    </div>
  )
}

export default ContactForm