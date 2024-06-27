import React from 'react'
import './navbar.scss'

const Navbar = () => {
  return (
     <div className='nav'>
      <div className='navmenu'>
        <p>Home</p>
        <p>About</p>
        <p>GreenStores<sup>Tm</sup></p>
        <p>Blog</p>
        <button className='navbut'>Get Started</button>
      </div>
    </div>
  )
}

export default Navbar
