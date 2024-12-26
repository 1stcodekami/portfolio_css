// 'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeartCounter from '../component/heartCounter'

const Project = () => {
  return (
    <div className='pro-main'>
      <h1 className='heading'>My Projects</h1>
      <div className='project'>
        <h2 className='pro-h2'>There are my some Projects</h2>
        <p className='pro-p'> My applications is user-friendly, intuitive, and provides a seamless experience with fast load times and minimal bugs. It should offer clear functionality, be reliable, and solve a specific problem or meet a need effectively. Personalization, security, and frequent updates to enhance features are also important. The app should have an appealing design, smooth navigation, and provide value to users, keeping them engaged and satisfied.</p>

      </div>
      <div className='main'>
      <div className='main-1'>
        <div className='card'>
          <div className='img2-div'>
            <Image src="/images/Back_2.jpg" alt="" width={200} height={200} className="img2" />
          </div>
          <div className="description-1">
            <h3 className="card-h">Number Game</h3>
            <HeartCounter initialValue={250} />
          </div>

          <p className='card-p'>Number game app is a fun and educational tool that challenges players with puzzles and tasks involving numbers, enhancing their math skills, logical thinking, and problem-solving abilities. </p>
        </div>

        <div className='card'>
          <div className='img2-div'>
            <Image src="/images/Health_900.png" alt="" width={200} height={200} className="img2" />
          </div>
          <div className="description-1">
            <h3 className="card-h">Running</h3>
            <HeartCounter initialValue={224} />
          </div>
          <p className='card-p'>A good running app is designed to track and enhance your running experience by providing metrics, motivation, and tools to improve your performance.</p>
        </div>
        </div>
        <div className='main-2'>
        <div className='card'>
          <div className='img2-div'>
            <Image src="/images/food_2.png" alt="" width={200} height={200} className="img2" />
          </div>
          <div className="description-1">
            <h3 className="card-h">Food Order</h3>
            <HeartCounter initialValue={304} />
          </div>
          <p className='card-p'>Food ordering app is a convenient platform that allows users to browse menus, place orders, and enjoy meals from their favorite restaurants or delivery services.</p>

        </div>

        <div className='card'>
          <div className='img2-div'>
            <Image src="/images/Eco_900.png" alt="" width={200} height={200} className="img2" />
          </div>
          <div className="description-1">
            <h3 className="card-h">E-commerce</h3>
            <HeartCounter initialValue={281} />
          </div>
          <p className='card-p'>This application that allows users to browse, shop, and manage purchases from online stores, these apps aim to provide a secure, and enjoyable shopping experience.</p>

        </div>
        </div>
        <div className='main-3'>
        <div className='card'>
          <div className='img2-div'>
            <Image src="/images/fit_900.jpg" alt="" width={200} height={200} className="img2" />
          </div>
          <div className="description-1">
            <h3 className="card-h">Fitness</h3>
            <HeartCounter initialValue={265} />
          </div>
          <p className='card-p'>These apps provide a range of features, from workout tracking and personalized plans to nutrition advice and motivation, anyone looking to lead a healthier, more active lifestyle.</p>

        </div>

        <div className='card'>
          <div className='img2-div'>
            <Image src="/images/Ecom_900.png" alt="" width={200} height={200} className="img2" />
          </div>
          <div className="description-1">
            <h3 className="card-h">Shopping</h3>
            <HeartCounter initialValue={224} />
          </div>
          <p className='card-p'>These apps are designed to enhance the online shopping experience by offering navigation, personalized recommendations, secure payment options, and timely delivery.</p>

        </div>
        </div>
      </div>
     
    </div>
  )
}

export default Project


