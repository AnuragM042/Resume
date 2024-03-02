import React from 'react'

const About = () => {
  return (
    <div name='About' className='w-full h-screen bg-slate-700 text-gray-300' >
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8 sm:text-right pb-8 pl-4' >
                <p className='text-4xl font-bold inline border-b-4 border-black'>About</p>
            </div>
            <div>
            </div>
            <div className='max-w[1000px] w-ful grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold' >
                    <p>
                            Hi I am Anurag ,Nice to meet you .Please Look around.
                    </p>
                </div>
                <div>
                    <p>
                        I am Passionate about Building and Learning new things in Frontend programming . I am a College Student Currently and studying BSCIT in BHAVANS College . 
                        I am Happy that you have visited my Website please give a remark on how i can improve it.
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}
  export default  About
  