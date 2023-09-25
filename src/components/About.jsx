import React from 'react'
import Carlos from './images/carlos.jpg'

export default function About() {

  return (
    <div className='about__section py-[75px] px-[20px] md:px-[40px] lg:px-[70px]' id='about'>
      <h2 className='font-extrabold text-[#733B9E] text-center text-[28px]'>ABOUT ME</h2>
      <div className="about__context pt-[25px] grid lg:grid-cols-2">
        <div className="about__photo border relative h-[500px] md:h-[580px] lg:h-[550px]">
          <img src={Carlos} alt="Carlos Photo" className=' w-[100%] h-[100%] absolute top-0 left-0 right-0 bottom-0 top-0 object-cover' />
        </div>
        <div className="about__description pt-[30px] lg:pt-[0] lg:pl-[30px]">
          <p className='leading-8 lg:leading-9'>
            Hi there! I’m Carlos Lopez a self-taught front-end developer who used to work as Bilingual Customer Services Representative. I decided to learn Web Development on my own because I always wanted to know how the systems I used at work were built, plus I wanted to have my own website.
          </p>
          <p className='leading-8 pt-[15px] lg:leading-9'>
            I am someone who love learning new things and share my knowledge with others. Also,  I am very friendly and enjoy working with different teams in order to learn more and improve my skills.
          </p>
          <div className="about__icons pt-[20px] flex flex-col gap-[20px]">
            <div className="icon__box flex gap-[10px]">
              <p className='font-bold text-[#733B9E]'>AGE:</p>
              <p>29 years old</p>
            </div>
            <div className="icon__box flex gap-[10px]">
              <p className='font-bold text-[#733B9E]'>LOCATION:</p>
              <p>Hartford, CT</p>
            </div>
            <div className="icon__box flex gap-[10px]">
              <p className='font-bold text-[#733B9E]'>AUTHORIZED TO WORK IN US:</p>
              <p>Yes</p>
            </div>
            <div className="icon__box flex gap-[10px]">
              <p className='font-bold text-[#733B9E]'>LANGUAGE:</p>
              <p>Spanish & English</p>
            </div>
          </div>

          <div className="about__btn pt-[35px]">
            <a href="#" className='bg-[#733B9E] text-white font-semibold px-[30px] py-[13px] rounded-[59px] tracking-[1px] hover:shadow-xl shadow-[black]'>DOWNLOAD CV</a>
          </div>
        </div>
      </div>
    </div>
  )
}
