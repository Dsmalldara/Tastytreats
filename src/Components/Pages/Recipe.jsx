import React, { useState } from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import Loader from './Loader'
function Recipe() {
  const [recipes, setRecipes] = useState([])
  const[query, setQuery] = useState('Vegan') 
  const[limit, setLimit] = useState(30) 
  const[loading, setLoading] = useState(false) 
  
  if (loading){
    return (
      <Loader/>
    )
  }
  return (
    <div className='w-full'>
      <div></div>
      Recipe</div>
  )
}

export default Recipe