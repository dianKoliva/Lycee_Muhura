import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {HashLink as Link} from "react-router-hash-link"
const Navbar = () => {
    const [nav,setNav]=useState(false);
    const handleNav=()=>{
        setNav(!nav);
    }
  return (
    <div className=' text-sm bg-white flex justify-between h-24 max-w-[1240px] mx-auto px-4 text-black'>
     
      <h1 className='  w-full text-2xl  font-bold pt-6 text-[#ffffff]'>LYCEE MUHURA .</h1>
    <ul className=' hidden text-white font-bold  md:flex '>
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

    <div onClick={handleNav} className='pt-5 block md:hidden'>
        {!nav?<AiOutlineMenu color="white" size={20}/>:<AiOutlineClose color="white" size={20}/> }
   
    </div>

    <div className={nav?'md:hidden fixed left-0 text-sm top-0 w-[50%] h-full border-r border-r-white ease-in-out duration-500':'fixed left-[-100%] md:hidden'}>
    <ul className=' pt-24 uppercase font-bold text-white'>
    <Link to="#home" onClick={handleNav} smooth>
    <li className='p-4 border-b border-white'>Home</li>
    </Link>
    <Link to="#about" onClick={handleNav} smooth>
    <li className='p-4 border-b border-white'>About</li>
    </Link>
    <Link to="#cards" onClick={handleNav} smooth>
    <li className='p-4 border-b border-white'>Reviews</li>
    </Link>
      <Link to="#contact" onClick={handleNav} smooth>
      <li className='p-4 '>Contact</li>
      </Link>
       

      
        
    </ul>
    </div>
       
    </div>
  )
}

export default Navbar