import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <nav className="navbar-container">
    <Link to="/" className="nav-link">Home</Link>
    <Link to="/about" className="nav-link">About</Link>
    <Link to="/contact" className="nav-link">Contact</Link>
    <Link to="/profile" className="nav-link"><img 
        src="/profile.png" 
        alt="User Profile" 
      /><span>Profile</span></Link>
  </nav>
)
  
}

export default Navbar
