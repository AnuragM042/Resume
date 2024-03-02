import React from 'react'

const Contact = () => {
  return (
    <div name="Contact" className='w-full h-screen  bg-slate-600 text-gray-300 flex justify-center items-center '> 
        <form  method="POST" action="https://getform.io/f/xboDQLdg" className='flex flex-col max-w-[600px] w-full '>
             <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-black '> Contact</p>
                  <p>Submit the form below or submit me an Email-mishraanurag7659@gmail.com</p>

             </div>
             <input className='bg-slate-300 text-black' type="text" placeholder='Name' name="name"  />
             <input className='my-4 p-2 bg-slate-300 text-black' type="text" placeholder='Email' name="Email"  />
             <textarea className='bg-slate-300 text-black' name="message" id="" cols="30" rows="10" placeholder='Message' ></textarea>
             <button className=' text-white border-2 hover:bg-black hover:border-white px-4 py-3 my-8 mx-auto flex items-center ' >Let's Work Together  </button>
         </form>

    </div>
  )
}

export default Contact