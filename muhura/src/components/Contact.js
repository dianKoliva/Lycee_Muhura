import React from 'react'
import read from "../images/contact.svg"

function Contact() {
  return (
    <div className='w-full bg-white py-16 px-4'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img src={read} className='w-[400px] mx-auto my-auto ' alt="/"></img>
        <div className='flex flex-col justify-center pl-8  '>
          <h1 className='text-[#606642] font-bold '>Contact Us</h1>

          <div className=''>
          <div className=' flex flex-col  text-sm  mt-4'>
            <label className='mb-1 text-[#666966]'>Full Name</label>
            <input spellCheck="false"  className='w-[400px]  bg-[#EEEEEE] focus:outline-none rounded-sm px-3 py-2' />
          </div>
          <div className=' flex flex-col  text-sm  mt-4'>
            <label className='mb-1 text-[#666966]'>Email</label>
            <input spellCheck="false"  className='w-[400px]  bg-[#EEEEEE] focus:outline-none rounded-sm px-3 py-2' />
          </div>
          <div className=' flex flex-col  text-sm  mt-4'>
            <label className='mb-1 text-[#666966]'>Message</label>
            <textarea spellCheck="false" placeholder='Write a message'  className='w-[400px] h-[120px]  bg-[#EEEEEE] focus:outline-none rounded-sm  px-3 py-2'>
                
            </textarea>
          </div>
        

          <button className='bg-[#606642] text-white text-sm font-bold  w-[400px] md:mx-0 my-6 mx-auto py-2 rounded-md'>Send </button>
            
          </div>

        
        </div>
    </div>

</div>
  )
}

export default Contact