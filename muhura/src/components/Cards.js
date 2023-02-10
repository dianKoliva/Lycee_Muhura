import React from 'react'
import one from "../images/woma.png"
import two from "../images/boy.png"
import three from "../images/girl.png"

const Cards = () => {
  return (
    <div className='w-full bg-[#606642]  py-[4rem] px-4 '>

<div className='max-w-[1240px] mx-auto grid md:grid-cols-3  gap-8'>
    <div className='w-full shadow-xl flex flex-col p-14 bg-white rounded-lg hover:scale-90 duration-300 '>
        <img className='w-20 h-20 mx-auto rounded-full  bg-white' src={one} alt=""></img>
<h2 className=' text-sm font-bold text-center py-4'>Iriza Belyse</h2>
<p className='text-center text-sm'>
I am so grateful to have studied at Lycee Muhura. 
The school's activities and community service made me a well-rounded person.
I have gained a lot of freinds and most of them have become family. I can't Imagine where 
I would be if I wasn't taught by Lycee's intelligent teachers. 
</p>
    </div>
    <div className='w-full shadow-xl flex flex-col p-14  bg-white rounded-lg hover:scale-90 duration-300 '>
        <img className='w-20 h-20 mx-auto  bg-white rounded-full'  src={two} alt=""></img>
<h2 className=' text-sm font-bold text-center py-4'>Manzi Jac</h2>
<p className='text-center text-sm'>
As Lycee's former boyfreind, I highly recommend Lycee Muhura. I studied computer science and I was
taught by intellignt teachers and I improved my knowledge through experiential learning. I can't forget to 
mention how I enjoyed food at Lycee and all the time, I always looked forward to breakfast, lunch and dinner time.
</p>
    </div>
    <div className='w-full shadow-xl flex flex-col p-14  bg-white rounded-lg hover:scale-90 duration-300 '>
        <img className='w-20 mx-auto rounded-full  bg-white' src={three} alt=""></img>
<h2 className=' text-sm font-bold text-center py-4'>Keza Kylei</h2>
<p className='text-center text-sm'>
  I graduated from Lycee and I am currently a marketing director. 
  Through Lycee's debate club, I learnt to be confident and share my 
  opinions. Through business club, I gained skills that are now strongly contributing 
  to my career. I appreciate the opportunity to have attended Lycee because I gained useful connections
</p>
    </div>
    </div>       

    </div>
  )
}

export default Cards