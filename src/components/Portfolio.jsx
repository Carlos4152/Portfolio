import React from 'react'
import Project from './PortfolioData'


export default function Portfolio() {
  return (
    <div className='portfolio__section py-[75px] px-[20px] md:px-[40px] lg:px-[70px]' id='portfolio'>
      <h2 className='font-extrabold text-[#733B9E] text-center text-[28px]'>PORTFOLIO</h2>
      <div className="portfolio__project__container lg:w-[70%] lg:mx-auto">

        {Project.map((item) =>
          <div className="project__box mt-[75px] grid " key={item.id}>
            <div className="img__project overflow-hidden relative w-[100%] h-[202px] md:h-[322px] lg:h-[406px]  xl:h-[380px]">
              <img src={item.image} alt="" className='absolute top-0 left-0 bottom-0 right-0  object-cover' />
            </div>
            <div className="project__context bg-[#733B9E] text-white px-[10px] py-[25px]    lg:px-[20px] lg:py-[30px] rounded-b-[10px]">
              <h3 className='font-extrabold text-[21px]'>{item.name}</h3>
              <p className='pt-[15px] leading-8'>{item.description}</p>
              <div className="pt-[20px] flex gap-[8px]">
                {item.skill.map((skills, index) => (
                  <div className="icon__section flex gap-[6px]" key={index}>
                    <img src={skills} alt="" className='w-[20px] h-[20px]' />
                  </div>))}
              </div>
              <div className="project__btn pt-[30px]">
                <a href={item.view} target='_blank' className='bg-[green] text-white font-semibold px-[18px] py-[10px] md:px-[25px] rounded-[59px] tracking-[2px] shadow-lg mr-[15px]'>LIVE VIEW</a>
                <a href={item.github} target='_blank' className='bg-[black] text-white font-semibold px-[18px] py-[10px] md:px-[25px] rounded-[59px] tracking-[2px] shadow-lg'>GITHUB</a>
              </div>
            </div>
          </div>)}
      </div>
    </div>
  )
}
