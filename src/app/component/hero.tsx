'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TypingHeadline from './typingHeadline'
const Hero = () => {
  return (
    <div className='hero'>
      <div className='info-div'>
        <p className='pw'>WELCOME TO MY WORLD</p>
        <h1>Hello, I&#39;m <span className='m-name'>M Kamran</span> <br/>a <TypingHeadline /></h1>
        
            {/* Use TypingHeadline in place of static text */}
        <div className='description-div'>
        <p >I am a passionate full-stack developer and UI/UX designer dedicated to crafting seamless and visually engaging digital experiences. With expertise in front-end design, back-end development, and user-centered design principles, I transform ideas into intuitive, scalable applications.</p></div>
            <div className='btn2'>
                <button className='bt'><Link href="/about" className='link1'>About Me</Link></button>
                <button className='bt'><Link href="/contact" className='link1'>Contact Me</Link></button>

            </div>
        </div>
        
        <div className="card-img">
            <Image src="/images/Photo_t.png" alt='Profile Picture' width={250} height={240} className='img'/>
        </div>
        
        
      
    </div>
  )
}

export default Hero
