import React from 'react'
import Photo from "./images/carlos.jpg"

export default function Hero() {
	return (
		<section className='hero__section text-center py-[50px] px-[20px] md:px-[40px] text-white h-[100vh] md:pt-[6rem] lg:px-[70px] xl:px-[75px]'>
			<p className='xl:text-[19px]'>Building Tomorrow's Web</p>
			<h1 className='font-extrabold text-[30px] xl:text-[50px]'><span className='text-[#733B9E]'>Web</span> & <span className='text-[#733B9E]'>Front-end</span> <br /> Developer</h1>
			<p className='pt-[25px] md:w-[500px] xl:text-[19px] lg:mx-auto'>
				Build and convert Figma design into HTML and CSS adding functionalities using JavaScript along with React. Ensure that all pages are mobile-friendly and responsive on all laptop screen sizes.
			</p>
			<div className="hero__btn pt-[35px] xl:pt-[60px]">
				<a href="#contact" className='transition-all ease-in-out hover:bg-[#733B9E] border border-[#733B9E] text-white font-semibold py-[10px] px-[20px] rounded-[59px] tracking-[1px] xl:px-[30px] xl:py-[25px]'>Let’s Work Together!</a>
			</div>
		</section>
	)
}
