 import React from 'react'
 import tailwind from './assets/tailwind.png'
 import Re from './assets/react.png'
 import Mongo from './assets/mongo.png'
 import JS from './assets/javascript.png'
 import html from './assets/html.png'
 import github from './assets/github.png'
 import css from './assets/css.png'

 
 const Skills = () => {
   return (
     <div name='Skills' className='w-full h-screen bg-slate-600 text-gray-300 '>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className=''>
                <p className='text-4xl font-bold inline border-b-4 border-black'>
                    Skills
                </p>
                <p className='text-2xl sm-text-3xl'>
                    These are the technologies I'have worked with
                </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                 <div className='shadow-md shadow-black hover:scale-110 duration-500 '>
                      <img className='w-20 mx-auto' src={html} alt="" />
                      <p className='my-4'> HTML</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500 '>
                      <img className='w-20 mx-auto' src={tailwind} alt="" />
                      <p className='my-4'> TAILWIND</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500 '>
                      <img className='w-20 mx-auto' src={css} alt="" />
                      <p className='my-4'> CSS</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500 '>
                      <img className='w-20 mx-auto' src={JS} alt="" />
                      <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500 '>
                      <img className='w-20 mx-auto' src={Mongo} alt="" />
                      <p className='my-4'>Mongodb</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={github} alt="" />
                      <p className='my-4'>Github</p>
                </div>
            </div>
        </div>

     </div>
   )
 }
 
 export default Skills