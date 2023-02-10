import React from 'react'
import background from "../images/11.jpg"
import Typed from 'react-typed';

function Home() {
  return (
    <div className='text-white justify-center  bg-no-repeat bg-cover bg-center ' style={{ backgroundImage: `url(${background})` }}>
<div className='max-w-[800px mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
 
<p className='font-bold p-2 md:text-5xl sm:text-4xl text-4xl text-white'>Best learning experience </p>
<div className='flex justify-center'>

<p className='pt-4 md:text-3xl sm:text-3xl text-xl text-white'>Prepare a great future </p>
<Typed className='pt-4 md:text-3xl sm:text-2xl text-xl pl-2 text-white' strings={[' for your child']} typeSpeed={400} backSpeed={400} loop ></Typed>
</div>
<div className='pt-8'>
<button className='bg-[#606642]  text-center hover:scale-90 duration-300 w-[200px] font-medium my-6 mx-auto py-2 rounded-md'>Learn more</button>
</div>

</div>

    </div>
  )
}

export default Home