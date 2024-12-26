import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'
// import { FaGithub } from 'react-icons/fa'
import Skills from '../component/skillsBar'



const About = () => {
  return (
    <div>
      <h1 className='heading'>About Me</h1>
      <div className='about-pic'>
            <Image src="/images/profile.png" alt='Profile Picture' width="200" height="200" className='img1'/>
            </div>
      <h2 className='about-h2'>UI/UX Designer & full stack Developer.</h2>
      <p className='about-p' >  A skilled UI/UX designer & full-stack developer brings a powerful combination of creativity and technical expertise to create seamless, user-centered digital experiences. The designer focuses on crafting intuitive interfaces that are visually appealing and easy to navigate, while the developer ensures the app’s functionality, performance, and scalability from front-end to back-end. This unique skill set allows them to bridge the gap between design and development, ensuring both aesthetic quality and robust, efficient code. Together, they create products that are not only beautiful but also functional, responsive, and user-friendly.</p>
      <div className='btn3'>
        <button className='card-icon'><FaLinkedin className='icon'/></button>
        <button className='card-icon'><FaFacebookF className='icon'/></button>
        <button className='card-icon'><FaInstagram className='icon'/></button>
       
      </div>
      {/* <br /><br />
      <br /> */}
      <Skills/>
      
    </div>
  )
}

export default About


