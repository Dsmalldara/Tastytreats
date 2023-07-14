import React, { useEffect, useState } from 'react'
import img1 from  '../Images/img1.jpg';
import img2 from  '../Images/img2.jpg';
import img3 from  '../Images/img3.jpg';
import img4 from  '../Images/img4.jpg';
import img5 from  '../Images/img5.jpg';
import img6 from  '../Images/img6.jpg';
function Header({title, Image, body}) {
    const Images =[
        img1,img2,img3,img4,img5,img6
    ]
    const [imageRandom, setImageRandom] = useState("")
     useEffect(()=>{
              // this helps us to get our random images
         function getRandomImage(){
         const random= Math.floor(Math.random()* Images.length);
         const randomPath = Images[random]
        return randomPath;
        }

        const updateImage =()=>{
             // we set the random images to a variable
            setImageRandom(getRandomImage())
        }
     
        updateImage();
},[])
  return (
    <div className=' h-[100vh]'>
        <div className='flex  relative h-full'>
        <img src={ imageRandom} alt="" className='w-[200vw] z-10 h-[140]vh object-cover' />
        <div className='absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center z-10 bg-gradient-to from-black to-transparent 2xl:pt-20 pt-40 '>
          <h1 className='text-center text-white text-4xl md:text-5xl font-oswald '>
           {title}
          </h1>
          <p className=' hidden  md:flex pt-4  text-xs md:text-sm bg-[#00000090] text-center px-2   py-1 pb-3 rounded-full mt-5  font-bold text-green-500 shadow-lg ease-linear  md:mx-2 mx-5'>{body}</p>
        </div>
        </div>
        
    </div>
  )
}

export default Header