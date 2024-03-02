import React from 'react';
import tdl from './assets/todo.png';
import rps from './assets/RPS.jpeg';
import ms from './assets/MovieSearch.jpeg';

const Work = () => {
  return (
    <div name='Work' className='w-full md:h-screen bg-slate-700 text-gray-300 '> 
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full '>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-black'> Work</p>
          <p className='w-[200px]'>Check out some of my projects</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 bg-cover'>
          {/* Grid Item */}
          {/* 1st Project */}
          <div
            style={{ backgroundImage: `url(${rps})`, backgroundSize: 'cover' }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                A Rock-Paper-Scissors game
              </span>
              <div className="pt-8 text-center">
                {/* eslint-disable-next-line */}
                <a href="" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
                {/* eslint-disable-next-line */}
                <a href="https://rock-paper-scissor-anurag.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</button>
                </a>
              </div>
            </div>
          </div>
          {/* 2nd project */}
          <div
            style={{ backgroundImage: `url(${tdl})`, backgroundSize: 'cover' }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                A To-Do-List
              </span>
              <div className="pt-8 text-center">
                {/* eslint-disable-next-line */}
                <a href="" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
                {/* eslint-disable-next-line */}
                <a href="https://to-do-list-anurag.netlify.app" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</button>
                </a>
              </div>
            </div>
          </div>
          {/* 3rd project */}
          <div
            style={{ backgroundImage: `url(${ms})`, backgroundSize: 'cover' }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                A Movie-Dex
              </span>
              <div className="pt-8 text-center">
                {/* eslint-disable-next-line */}
                <a href="" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
                {/* eslint-disable-next-line */}
                <a href="https://movie-dex-anurag.netlify.app/" target="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;
