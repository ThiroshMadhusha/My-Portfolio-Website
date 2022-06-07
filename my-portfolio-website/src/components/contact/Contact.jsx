import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>thiroshmadhusha0520@gmail.com</h5>
            <a href="mailto:thiroshmadhusha0520@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Thirosh Madhusha</h5>
            <a
              href="https://www.linkedin.com/in/thirosh-madhusha"
              target="_blank"
            >
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+94 775338747</h5>
            <a href="https://wa.me/+94775338747" target="_blank">
              Send a Message
            </a>
          </article>
          </div>

          {/* End of contact option */}

          <form action="">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
            <textarea
              type="text"
              name="message"
              rows="7"
              placeholder="Enter Your Message"
              required
            />
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
    </section>
  );
};

export default Contact;
