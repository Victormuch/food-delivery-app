import React from 'react'
import './NavBar/NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
        <ul className="navbar-menu">
            <li>Home</li>
            <li>menu</li>
            <li>mobile-app</li>
            <li>contact us</li>
        </ul>
        <div className='navbar-search-icon'> 
        </div>
    </div>
  )
}

export default NavBar;