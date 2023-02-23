import React from 'react'
import navLogo from "../assets/nav-logo.svg"
import { Link } from 'react-router-dom';
import { useEffect } from 'react';



function Nav() {
  // let menu = document.querySelector("#menu-icon");
  // let navbar = document.querySelector("header").querySelector("nav");

  // menu.addEventListener("click", function () {
  //   navbar.classList.toggle("active");
  // });

  // window.onscroll = () => {
  //   navbar.classList.remove("active");
  // };

  useEffect(() => {
    const menu = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar ul');

    menu.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });

    window.onscroll = () => {
      navbar.classList.remove("active");
    };
  }, []);

  return (
    // <body>
      <header>
      <img src={navLogo} alt="Little Lemon Logo" className='logo'/>
      <div  class="bx bx-menu" id="menu-icon"></div>
      <nav class="navbar">
        <ul>
        <li><Link className="a" to="/">Home</Link></li>
        <li><Link className="a" to="/">About</Link></li>
        <li><Link className="a" to="/">Menu</Link></li>
        <li><Link  to="/booking" className="a">Reservations</Link></li>
        <li><Link className="a" to="/">Order Online</Link></li>
        <li><Link className="a" to="/">Login</Link></li>
        </ul>
        </nav>
      </header>
    // </body>
  )
}

export default Nav