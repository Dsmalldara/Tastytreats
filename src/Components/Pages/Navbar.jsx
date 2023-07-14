import React, { useState } from 'react'
import Button from './btn'
import img1 from '../Images/img1.jpg'
import logo from '../Images/logo.jpg'
import {BiMenu} from 'react-icons/bi'
import {MdCancel} from 'react-icons/md'
function Navbar() {
     const [isOpen, setIsOpen] = useState(false);
     function toggleIsOpen(){
        setIsOpen(!isOpen)
    
     }
  return (
    <header  className='z-30 bg-slate-950 border-s border-e relative'>
        <nav className='flex  items-center justify-between w-full  py-3 md:space-x-12 space-x-2 md:px-12 px-4  pl-6'>
            <a href="/" className='flex md:flex items-center justify-center h-13 w-16  text-2xl cursor-pointer  font-playfair text-yellow-100 pl-12 md:pl-4 z-50'>
          Tastytreats
            </a>
        <ul className='hidden items-center  md:flex hover:no-underline  space-x-12 font-raleway pr-5 text-yellow-100 '>
            <a href="/">Home</a>
            <a href="/">Explore Recipes</a>
            <a href="">Favourites Recipes</a>
        </ul>
        <Button title={<>sign in</>} style='hidden md:flex bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[90px] min-h-[30px] font-[raleway]'/>

        <div className='flex md:hidden  justify-items-end px-2 '>

           <div className={`${isOpen ? 'flex' : 'hidden'}  bg-slate-900 flex-col top-2 right-4 absolute w-[95%] h-[300px]  m-w-[360px] py-10 pl-20  pb-10 text-white text-[14px]  border  border-transparent  rounded-md`}>
        <ul className='flex flex-col gap-10 font-bold font-oswald  '>
              <a href="/" className='pt-6'>Home</a>
            <a href="/">Explore Recipes</a>
            <a href="/">Favorites</a>
        </ul>
           </div>
        </div>
        <button onClick={toggleIsOpen} className='flex md:hidden text-white  z-40 bg-slate-900'>
            {isOpen ? <MdCancel className='outline-none font-bold'/> :<BiMenu className='outline-none font-bold  '/> }
           </button>
        </nav>
    </header>
  )
}

export default Navbar;