import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
    const [nav,setNav]=useState(false);
    const handleNav=()=>{
        setNav(!nav);
    }
  return (
    <div className=' text-sm bg-white flex justify-between h-24 max-w-[1240px] mx-auto px-4 text-black'>
      <h1 className='  w-full text-2xl  font-bold pt-6 text-[#ffffff]'>LYCEE MUHURA .</h1>
    <ul className=' hidden text-white font-bold  md:flex '>
        <li className='p-8  transition duration-300   '>Home</li>
        <li className='p-8'>About</li>
        <li className='p-8'>Academics</li>
        <li className='p-8'>Reviews</li>
        <li className='p-8'>Contact</li>
    </ul>

    <div onClick={handleNav} className='pt-5 block md:hidden'>
        {!nav?<AiOutlineMenu color="white" size={20}/>:<AiOutlineClose color="white" size={20}/> }
   
    </div>

    <div className={nav?'md:hidden fixed left-0 text-sm top-0 w-[50%] h-full border-r border-r-white ease-in-out duration-500':'fixed left-[-100%] md:hidden'}>
    <ul className=' pt-24 uppercase font-bold text-white'>
        <li className='p-4 border-b border-white'>Home</li>
        <li className='p-4 border-b border-white'>About</li>
        <li className='p-4 border-b border-white'>Academics</li>
        <li className='p-4 border-b border-white'>Reviews</li>
        <li className='p-4 '>Contact</li>
    </ul>
    </div>
       
    </div>
  )
}

export default Navbar