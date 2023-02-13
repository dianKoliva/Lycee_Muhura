import React from 'react'
import read from "../images/two.jpeg"



// Import Swiper styles
// import required modules

const About = () => {
  return (
    <div id='about' className='w-full bg-white py-16 px-4 text-sm'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={read} className='w-[400px] mx-auto my-4 rounded-lg' alt="/"></img>
            

         

            <div className='flex flex-col justify-center pl-8 mt-4'>
              <h1 className='text-[#606642] font-bold  '>About Lycee Muhura</h1>
              <p className='pr-12 pt-4 '>Our educatioin system has helped many students to advance their
                sklls. Our school provides well rounded-education through extracurricular
                activities. Students engage in sports which help them to relax while also connecting 
                with peers. We have community service programs through which students work on sommunity serving projects.
                Our teachers our also intelligent and contribute to the growth of our students. Noteworthy, most parents wworry about what
                their children eat at school, but at Lyce, students are well fed since we know that food highly contributes to 
                a person's performance.
              </p>
              <a href="https://www.instagram.com/lyce_de_muhura/" target="_blank" rel="noreferrer">

              <button className='bg-[#606642] focus:outline-none text-white   w-[200px] md:mx-0 my-6 mx-auto py-2 rounded-md'>See More Photos</button>
              </a>
            </div>
        </div>

    </div>
  )
}

export default About