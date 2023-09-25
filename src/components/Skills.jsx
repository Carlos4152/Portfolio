import React from 'react'

import CSS from "./images/css.png"
import HTML from "./images/html.png"
import Tailwind from "./images/tailwind.png"
import Bootstrap from "./images/bootstrap.png"
import Figma from "./images/figma.png"
import Git from "./images/git.png"
import Github from "./images/github.png"
import Javascript from "./images/js.png"
import react from "./images/react.png"

const FrontendSkills = [Git, Github, Figma, HTML, CSS, Bootstrap, Tailwind, Javascript, react];

export default function Skill() {

	const showSkills = FrontendSkills.map(items =>
		<div className="icon__box flex justify-center" >
			<img src={items} alt="" className='w-[50px] h-[50px]' />
		</div>
	)
	return (
		<div className='skill__section md:px-[40px] lg:px-[70px] xl:px-[75px] py-[75px] px-[20px]' id='skill'>
			<div className="skill__content bg-[#292525] grid lg:grid-cols-2 py-[40px] px-[26px] shadow-2xl shadow-[#733B9E] rounded-[15px] lg:py-[65px] lg:px-[70px]">
				<div className="skill__context text-white">
					<h2 className='font-extrabold text-[28px] text-[#733B9E]'>MY SKILLS</h2>
					<p className='pt-[20px] leading-10'>
					These are the skills that I learned by myself through watching videos on YouTube, reading documentation, and building personal projects. I also taught myself how to speak English, and now that I have learned multiple things on my own, I feel capable of learning anything.
					</p>
				</div>
				<div className="skills__icons grid grid-cols-3 gap-[25px] pt-[20px] ">
						{showSkills}
				</div>
			</div>
		</div>
	)
}
