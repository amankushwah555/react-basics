import React from 'react'
import './_categoriesBar.scss'
import  { useState } from 'react';
const keywords=[
  'All',
  'React js',
   'Angular js',
   'React Native',
   'use of API',
    'Redux',
    'Music',
    'Algorithm',
    'Guitor',
    'Coding',
    'Cricket',
    'Football',
    'Poor Coolder',
    
]
const Categoriesbar = () => {
  const [activeElement,setActiveElement]=useState('All')
  const handleClick=value=>{
    setActiveElement(value)
  }
  return(
     <div className='CategoriesBar'>
    {
      keywords.map((value,i)=>(
      <span 
      onClick={()=>setActiveElement(value)}
      key={i}
      className={activeElement  === value?"active":''}
      >{value}</span>)
    
    )}
  </div>
   ) 
  
}

export default Categoriesbar