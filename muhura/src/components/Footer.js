import React from 'react'
import {FaInstagram,FaTwitter,FaFacebook,FaWhatsapp} from'react-icons/fa';


const Footer = () => {
  return (
<div className='w-full bg-[#606642] grid justify-between lg:grid-cols-2 gap-8  '>
    <div className='p-6 md:p-8'>
    <h1 className='  w-full text-2xl  font-bold  text-[#ffffff]'>LYCEE MUHURA .</h1>
    <p className='text-white'>Prepare a bright future for your child</p>
    </div>
    <div>
    <ul className='  text-white   flex '>
        <li className='p-6 md:p-8'>Home</li>
        <li className='p-6 md:p-8'>About</li>
        <li className='p-6 md:p-8'>Academics</li>
        <li className='p-6 md:p-8'>Reviews</li>
        <li className='p-6 md:p-8'>Contact</li>
    </ul>
    <div className='  pl-10 pb-2 text-white text-lg grid grid-cols-4'>
        <FaFacebook/>
        <FaInstagram/>
        <FaTwitter/>
        <FaWhatsapp/>

    </div>
    </div>


   

    </div>
  )
}

export default Footer