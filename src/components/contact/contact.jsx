import React from 'react';
import './contact.css';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { BsLinkedin } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_wifyjdk',
      'template_vf303we',
      form.current,
      'W6G0wkTGWjiVyhDT0'
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact ME</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMailOpen />
            <h4>Email</h4>
            <h5>mohit9632147@gmail.com</h5>
            <a href="mailto:mohit9632147@gmail.com">Send a Mail </a>
          </article>

          <article className="contact__option">
            <IoLogoWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+91-7999635844</h5>
            <a href="https://wa.me/+917999635844">Send a Message</a>
          </article>

          <article className="contact__option">
            <BsLinkedin />
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/mohitsarawgi07/">
              Lets Connect !
            </a>
          </article>
        </div>
        <div>
          <form ref={form} onsubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// using E-mail js to submit form
