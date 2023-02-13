import React from 'react'
import navLogo from "../assets/nav-logo.svg"
import { Link } from "react-router-dom";



function Nav() {
  return (
    <body>
      <header>
      <img src={navLogo} alt="Little Lemon Logo" className='logo'/>
      <nav class="navbar">
        <ul>
        <li><Link className="a" to="/">Home</Link></li>
        <li><Link className="a" to="/">About</Link></li>
        <li><Link className="a" to="/">Menu</Link></li>
        <li><Link className="a" to="/">Reservations</Link></li>
        <li><Link className="a" to="/">Order Online</Link></li>
        <li><Link className="a" to="/">Login</Link></li>
        </ul>
        </nav>
      </header>
    </body>
  )
}

export default Nav