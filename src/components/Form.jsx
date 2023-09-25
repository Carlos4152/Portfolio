import React from 'react'

export default function Form() {
  return (
    <div className='py-[75px] px-[20px] md:px-[40px] lg:px-[70px] contact__form' id='contact'>
      <h2 className='font-extrabold text-[#733B9E] text-center text-[28px]'>GET IN TOUCH!</h2>
      <form className='md:w-[500px] mx-auto' action="https://formsubmit.co/lopez.carlos.ct@gmail.com" method="POST">
        <ul className='grid md:grid-cols-2 gap-[20px] pt-[20px] text-white'>
          <li className=''>
            <p>First Name <span className='text-[#733B9E]'>*</span></p>
            <input type="text" className='p-2 border-2 bg-[#1A1717] border-[#733B9E] text-white w-[100%] py-[3px] outline-0' name='first name' required/>
          </li>
          <li>
            <p>Last Name <span className='text-[#733B9E]'>*</span></p>
            <input type="text" className='p-2 border-2 bg-[#1A1717] border-[#733B9E] text-white w-[100%] py-[3px] outline-0' name='last name' required/>
          </li>
          <li className='md:col-span-2'>
            <p>Your Email Address <span className='text-[#733B9E]'>*</span></p>
            <input type="email" className='p-2 border-2 bg-[#1A1717] border-[#733B9E] text-white w-[100%] py-[3px] outline-0' name='email' required/>
          </li>
          <li className='md:col-span-2'>
            <p>Your Message</p>
            <textarea id="" name="text" cols="30" rows="10" className='p-2 border-2 bg-[#1A1717] border-[#733B9E] text-white w-[100%] outline-0' required></textarea>
          </li>
          <li className='md:col-span-2'>
              <button type='submit' className='transition-all ease-in-out hover:bg-[#733B9E] text-white font-semibold px-[18px] py-[10px] md:px-[25px] rounded-[59px] tracking-[2px] shadow-lg mr-[15px] w-[100%] border-2 border-[#733B9E]'>SEND MESSAGE</button>
          </li>
        </ul>
      </form>
    </div>  
  )
}
