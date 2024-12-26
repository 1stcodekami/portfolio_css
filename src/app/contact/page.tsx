import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'
// import styled from 'styled-components';




const Contact = () => {
  return (
    <div>
            <div className="contact-main">

      </div>
      <div className="contact-title">
        <h3>CONTACT</h3>
        <h1>Contact With Me</h1>
      </div>
      <div className="contact-div">

        <div className="contact-card1">
          <div className="img2-div">
            <Image src="/images/contact_2.png" alt="contact us" width={200} height={200} className="img2" />

          </div>
          <div className="description-1">
            <h3 className="card-h">Contact Us</h3>

          </div>
          <div className="contact-p">
            <p className='card-p'>Feel free to reach out for any inquiries, collaborations, or just to say hi. I&#39;m always open to new opportunities. </p>
            <p className="contact-pe"><span className="PE">Phone: </span>+92322xxxx</p>
            <p className="contact-pe"><span className="PE">Email: </span> abc@example.com</p>
            <p className="contact-pf"><span className="PE">FIND WITH ME </span></p>


            <div className='btn3'>
              <button className='card-icon'><FaLinkedin className='icon' /></button>
              <button className='card-icon'><FaFacebookF className='icon' /></button>
              <button className='card-icon'><FaInstagram className='icon' /></button>

            </div>
          </div>
        </div>
        <div className="contact-card2">
        <div className="contact">
            
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" required />
       
          <label htmlFor="phone"><span className="label1"></span>Phone Number</label>
          <input type="text" id="phone" name="phone" required />
         
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />
         
          <label htmlFor="message">Your Message</label>
          <textarea name="message" id="message"></textarea>
                 
        <button type="submit" className="contact-button">Send Message</button>
         
        </div> 
        </div>
      </div>
    </div>
  )
}

export default Contact
