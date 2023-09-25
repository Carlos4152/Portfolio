import React from 'react'
import FooterImg from './images/footer_img.png'

export default function Footer() {
  return (
    <div className='footer__section px-[20px] md:px-[40px] lg:px-[70px] grid md:grid-cols-3 items-center py-[30px]'>
      <div className="footer_title text-center">
        <h2 className='text-[#733B9E] font-extrabold text-[25px]'>Carlos Lopez</h2>
        <p>Front-End Web Developer</p>
      </div>
      <div className="footer_icons text-center py-[25px]">
      <a href="https://github.com/Carlos4152?tab=repositories" target="_blank"><i className="fa-brands fa-github text-[25px] mr-[10px] xl:text-[26px] hover:text-[#733B9E] transition-all ease-in-out"></i></a>
        <a href="https://www.linkedin.com/in/carloslopez1993/" target="_blank"><i className="fa-brands fa-linkedin-in text-[25px] xl:text-[26px] hover:text-[#733B9E] transition-all ease-in-out"></i></a>
      </div>
      <div className="footer__img flex justify-center">
        <img src={FooterImg} alt="" className='w-[200px]'/>
      </div>
      <div className="copy__right py-[10px] text-center md:col-span-3">
        <hr className='mb-[10px]'/>
        <small >2023 Carlos Lopez &copy; All right reserved.</small>
      </div>
    </div>
  )
}
