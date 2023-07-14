import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Components/Pages/HomePage'
import Recipe from './Components/Pages/Recipe'
import Navbar from './Components/Pages/Navbar'
import Footer from './Components/Pages/Footer'

function App() {

  return (
    <div className='bg-black'>
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/recipe' element={<Recipe/>}/>
        <Route/>
        </Routes>
        <Footer/>
      </Router>

    </div>
  )
}

export default App