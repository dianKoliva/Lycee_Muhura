import React from 'react'
import read from "../images/read.svg"
const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={read} className='w-[400px] mx-auto my-4' alt="/"></img>
            <div className='flex flex-col justify-center pl-8 mt-4'>
              <h1 className='text-[#606642] font-bold '>About Lycee Muhura</h1>
              <p className='pr-12 pt-4'>Our educatioin has helped many students to advance their
                sklls. Our school provides well rounded-education through extracurricular
                activities. Students engage in sports which help them to relax while also connecting 
                with peers. We have community service programs through which students work on sommunity serving projects.
                Our teachers our also intelligent and contribute to the growth of our students.
              </p>

              <button className='bg-[#606642] text-white  w-[200px] md:mx-0 my-6 mx-auto py-2 rounded-md'>See Photos</button>
                
            </div>
        </div>

    </div>
  )
}

export default About