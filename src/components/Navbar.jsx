import React, { useState } from "react"

export default function Navbar() {

  const [active, setActive] = useState(false);
  //
  return (
    <nav className="navbar lg:flex flex justify-between p-[20px] md:px-[40px] md:items-center lg:px-[70px] xl:px-[75px] xl:py-[30px]">
      <div className="carlos--logo">
        <h3 className="font-extrabold	text-[#733B9E] text-[20px] xl:text-[25px]">Carlos Lopez</h3>
      </div>
      {/*Responsive Menu__Mobile Phone */}
      <ul className={`lg:flex flex flex-col gap-[40px] lg:mx-auto font-semibold fixed bottom-0 top-0 right-0 items-center p-[20px] w-[100%] ${active ? "is__active" : "no__active"}  bg-[#292525] md:hidden lg:hidden text-white z-40`}>
        <div className="close--icon text-end w-[100%]">
          <i className="fa-solid fa-xmark text-[20px] cursor-pointer text-white" onClick={() => setActive(!active)}></i>
        </div>
        <li className="pt-[5rem]">
          <a href="#home" className="hover:text-[#733B9E] transition-all ease-in-out" onClick={() => setActive(!active)}>HOME</a>
        </li>
        <li>
          <a href="#about" className="hover:text-[#733B9E] transition-all ease-in-out" onClick={() => setActive(!active)}>ABOUT</a>
        </li>
        <li>
          <a href="#skill" className="hover:text-[#733B9E] transition-all ease-in-out" onClick={() => setActive(!active)}>SKILLS</a>
        </li>
        <li>
          <a href="#portfolio" className="hover:text-[#733B9E] transition-all ease-in-out" onClick={() => setActive(!active)}>PORTFOLIO</a>
        </li>
        <li className="">
          <a href="https://github.com/Carlos4152?tab=repositories" target="_blank"><i className="fa-brands fa-github text-[30px] mr-[15px]"></i></a>
          <a href="https://www.linkedin.com/in/carloslopez1993/" target="_blank"><i className="fa-brands fa-linkedin-in text-[30px]"></i></a>
        </li>
      </ul>
      {/*Desktop___Navbar*/}
      <ul className={`gap-[20px] lg:mx-auto font-semibold hidden md:flex text-white`}>
        <li>
          <a href="#" className="hover:text-[#733B9E] transition-all ease-in-out xl:text-[19px]">HOME</a>
        </li>
        <li>
          <a href="#about" className="hover:text-[#733B9E] transition-all ease-in-out xl:text-[19px]">ABOUT</a>
        </li>
        <li>
          <a href="#skill" className="hover:text-[#733B9E] transition-all ease-in-out xl:text-[19px]">SKILLS</a>
        </li>
        <li>
          <a href="#portfolio" className="hover:text-[#733B9E] transition-all ease-in-out xl:text-[19px]">PORTFOLIO</a>
        </li>
      </ul>
      <div className="social--link hidden md:flex text-white">
        <a href="https://github.com/Carlos4152?tab=repositories" target="_blank"><i className="fa-brands fa-github text-[21px] mr-[10px] xl:text-[26px] hover:text-[#733B9E] transition-all ease-in-out"></i></a>
        <a href="https://www.linkedin.com/in/carloslopez1993/" target="_blank"><i className="fa-brands fa-linkedin-in text-[21px] xl:text-[26px] hover:text-[#733B9E] transition-all ease-in-out"></i></a>
      </div>
      <i className='bx bx-menu-alt-right text-[25px] cursor-pointer md:hidden text-white' onClick={() => setActive(!active)}></i>


    </nav>
  )
}
