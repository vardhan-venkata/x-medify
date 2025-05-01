import React from 'react'
import Navbar from '../components/Navbar/NavBar'
import Hero from "./../components/Hero/Hero" 
import Dropdown from '../components/Dropdown/Dropdown';


const Landing = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Dropdown />
  
    </div>
  )
}

export default Landing