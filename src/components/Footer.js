import React from 'react'
import footerLogo from '../assets/footer-logo.png'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <body>
      <section id="contact">
        <div class="footer">
          <div class="main">
             <div class="col">
              <img src={footerLogo} alt="Little Lemon Logo" />
            </div> 
            <div class="col">
              <h4>Doormat Navigation</h4>
              <ul>
                <li><Link className="a" to="/">Home</Link></li>
                <li><Link className="a" to="/">About</Link></li>
                <li><Link className="a" to="/">Menu</Link></li>
                <li><Link className="a" to="/">Reservations</Link></li>
                <li><Link className="a" to="/">Order Online</Link></li>
                <li><Link className="a" to="/">Login</Link></li>
              </ul>
            </div>
            <div class="col">
              <h4>Contact</h4>
              <ul>
                <li><Link className="a" to="/">Chicago, Illinois</Link></li>
                <li><Link className="a" to="/">(312) 33 555</Link></li>
                <li><a href="mailto:littlelemon@info.com">littlelemon@info.com</a></li>
              </ul>
            </div>
            <div class="col">
              <h4>Social Media Links</h4>
              <div class="social">
                <a href="#"><i class='bx bxl-facebook'></i></a>
                <a href="#"><i class='bx bxl-instagram'></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </body>
  )
}

export default Footer