import React from 'react'
import Header from './Header'
function HomePage() {
 
  return (
    <main className='flex w-full flex-col'>
        <Header title={ <>
            Discover Flavorful Delights <br /> With Tasty Treats!
        </>}  body={<>
            Helping you  create a world of culinary delights while you unleash your inner chef. 
           
        </>}/>
       <section id='recipes' className='md:max-w-[1440px] mx-auto '>

       </section>
        </main>

  )
}

export default HomePage;