import React from 'react'
import image from "./Logo.svg"

function Nav(){
    return(
        <nav>
            <img src={image} alt="Logo" />
              <ul>
                <li><a href="Home.js">Home</a></li>
                <li><a href="About.js">About</a></li>
                <li><a href="Menu.js">Menu</a></li>
                <li><a href="Reservations.js">Reservations</a></li>
                <li><a href="OrderOnline.js">Order Online</a></li>
                <li><a href="Login.js">Login</a></li>
              </ul>
        </nav>
    )
}

export default Nav