import React, { useState } from 'react'
import read from "../images/contact.svg"

function Contact() {
  const[name,setName]=useState("");
  const [email,setEmail]=useState("");
  const[message,setMassage]=useState("");

  const submit=()=>{
    if(name.length!==0){
      if(email.length!==0){
            if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email)){
              if(message.length!==0){
console.log(name,email,message);
              }
              else{
                alert("Message should not be empty");
              }
    }
    else{
   alert("Use a valid email");
    }
     
  
      }
      else{
        alert("Email should not be empty");
      }

    }
    else{
      alert("Name should not be empty")
    }
   
   

 
  }
  return (
    <div id='contact' className='w-full bg-white py-16 px-4'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img src={read} className='w-[400px] mx-auto my-auto ' alt="/"></img>
        <div className='flex flex-col justify-center pl-8  '>
          <h1 className='text-[#606642] font-bold '>Contact Us</h1>

          <form  action="https://formsubmit.co/8d043365e16597318cc6f548c3e7dfaa" method="POST">

          <div className=' flex flex-col  text-sm  mt-4'>
            <label className='mb-1 text-[#666966]'>Full Name</label>
            <input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)} spellCheck="false"  className='w-[400px]  bg-[#EEEEEE] focus:outline-none rounded-sm px-3 py-2' />
          </div>
          <div className=' flex flex-col  text-sm  mt-4'>
            <label className='mb-1 text-[#666966]'>Email</label>
            <input type='text' name='email' spellCheck="false" value={email} onChange={(e)=>setEmail(e.target.value)}  className='w-[400px]  bg-[#EEEEEE] focus:outline-none rounded-sm px-3 py-2' />
          </div>
          <div className=' flex flex-col  text-sm  mt-4'>
            <label className='mb-1 text-[#666966]'>Message</label>
            <textarea type="text" name='message' value={message} onChange={(e)=>setMassage(e.target.value)} spellCheck="false" placeholder='Write a message'  className='w-[400px] h-[120px]  bg-[#EEEEEE] focus:outline-none rounded-sm  px-3 py-2'>
                
            </textarea>
          </div>
        

          <button type='submit' className='bg-[#606642] text-white text-sm font-bold  w-[400px] md:mx-0 my-6 mx-auto py-2 rounded-md'>Send </button>
            
          </form>

        
        </div>
    </div>

</div>
  )
}

export default Contact