import React from 'react'
import {FaInstagram,FaTwitter,FaFacebook,FaWhatsapp} from'react-icons/fa';
import {HashLink as Link} from "react-router-hash-link"


const Footer = () => {
  return (
<div className='w-full bg-[#606642] grid justify-between lg:grid-cols-2 gap-8  '>
    <div className='p-6 md:p-8'>
    <h1 className='  w-full text-2xl  font-bold  text-[#ffffff]'>LYCEE MUHURA .</h1>
    <p className='text-white text-sm'>Prepare a bright future for your child</p>
    </div>
    <div>
    <ul className='  text-white  text-sm  flex '>
    <Link to="#home" smooth>
    <li className="p-8 

     cursor-pointer
     hover:underline
        
        ">Home</li>
    </Link>
    <Link to="#about" smooth>
    <li className='p-8  cursor-pointer hover:underline'>About</li>
    </Link>
    
     
    <Link to="#cards" smooth>
        <li className='p-8  cursor-pointer hover:underline'>Reviews</li>
        </Link>
        <Link to="#contact" smooth>
        <li className='p-8  cursor-pointer hover:underline'>Contact</li>
          </Link>
    </ul>
    <div className='  pl-10 pb-2 text-white text-lg grid grid-cols-4'>
      <a href="https://www.facebook.com/profile.php?id=100090046819304&mibextid=ZbWKwL" target="_blank" rel="noreferrer">
      <FaFacebook/>
      </a>
    
        <a href="https://www.instagram.com/lyce_de_muhura/" target="_blank" rel="noreferrer">
        <FaInstagram/>
        </a>

       <a href=" https://twitter.com/Lycee_de_Muhura" target="_blank" rel="noreferrer">
       <FaTwitter/>
       </a>
      
      < a href='https://wa.link/k4h0yn'  target="_blank" rel="noreferrer">
      <FaWhatsapp/>
      </a>
     

    </div>
    </div>


   

    </div>
  )
}

export default Footer