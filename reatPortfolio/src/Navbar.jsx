import React, {useState} from 'react'
import {FaBars,FaTimes, FaLinkedin,FaGithub, FaFacebook } from 'react-icons/fa' 
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import AM from './assets/360_F_358101331_h4reyRvZGHYA066JhyhAKT4JEFB1gtwD.webp'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav , setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className= 'fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-700 text-gray-200'> 
     <div>
        <img src= {AM} alt="" style={{width: '100px'}}/>
     </div>
     {/* menu */}
     <div>
        <ul className='hidden  md:flex'>
            {/* Copied From google npm scroll react  */}
            <li> 
            <Link 
             to="Home"  
              smooth={true} 
             duration={500}  >
                 Home
             </Link>
            </li>
            {/* About */}
            <li>
                <Link 
             to="About"  
              smooth={true} 
             duration={500}  >
                 About
             </Link>
             </li>
             {/* Skills */}
            <li>
                <Link 
             to="Skills"  
              smooth={true} 
             duration={500}  >
                 Skills
             </Link>
             </li>
             {/* Work */}
            <li>
                <Link 
             to="Work"  
              smooth={true} 
             duration={500}  >
                 Work
             </Link>
              </li>
              {/* Contact */}
            <li>
                <Link 
             to="Contact"  
              smooth={true} 
             duration={500}  >
                 Contact
             </Link>
             </li>
        </ul>
     </div>


     {/* Hamburger */}
     <div onClick={handleClick} className=' md:hidden z-10 flex justify-end '>
      {!nav ? <FaBars/>: <FaTimes/>}
     </div>


     {/* Mobile menu */}
     <div>
     <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-700 flex flex-col justify-center items-center '} >\

            <li className='py-6 text-4xl' >
                 <Link onClick={handleClick}
             to="Home"  
              smooth={true} 
             duration={500}  >
                 Home
             </Link>
             </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick}
             to="About"  
              smooth={true} 
             duration={500}  >
                 About
             </Link>
             </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick}
             to="Skills"  
              smooth={true} 
             duration={500}  >
                 Skills
             </Link>
             </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick}
             to="Work"  
              smooth={true} 
             duration={500}  >
                 Work
             </Link>
             </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick}
             to="Contact"  
              smooth={true} 
             duration={500}  >
                 Contact
             </Link>
             </li>
        </ul>
     </div>

     {/* Social iocn */}
     <div className='hidden lg:flex fixed flex-col top-[35%] left-0' >
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 border-2 border-black' >
                <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/anurag-mishra-563606299/">
                    Linkedin <FaLinkedin size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-950 border-2  border-black' >
                <a className='flex justify-between items-center w-full text-gray-300 ' href="https://github.com/AnuragM042?tab=repositories">
                    Github<FaGithub size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-rose-700 border-2  border-black' >
                <a className='flex justify-between items-center w-full text-gray-300' href="mailto:mishraanurag7659@gmail.com">
                    Email<HiOutlineMail size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-purple-800 border-2  border-black'>
                <a className='flex justify-between items-center w-full text-gray-300' target='_blank' href="">
                   Resume<BsFillPersonLinesFill size={30}/>
                </a>
            </li>
        </ul>
     </div>
   
   </div>
  )
}
    export default Navbar;