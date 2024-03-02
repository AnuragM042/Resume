import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='Home' className='bg-slate-600 w-full h-screen' >
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-slate-100 sm:text-4xl'>Hi my name is </p>
            <h1 className='text-3xl sm:text-7xl text-slate-100 font-Bold'>Anurag Mishra</h1>
            <h2 className='text-2xl sm:text-6xl text-orange-300'>I'm a Frontend Developer</h2>
            <p className='text-slate-200 py-4 max-w-[500px]'> I am a College Student,Learning and Building Frontend Projects.
                Currently learning on building responsive Frontend Projects with React.JS </p>
                <div>
                    <button className='text-red-300 group border-2 px-6 py-2 my-2 flex items-center hover:bg-black hover:border-black'>View Work 
                     <span className='group-hover:rotate-90 duration-300'>
                     <HiArrowNarrowRight className='ml-3'/>
                     </span>
                     </button>
                </div>
        </div>
    </div>
        
    )
}

export default Home