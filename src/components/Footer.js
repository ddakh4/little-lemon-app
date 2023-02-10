import React from 'react'
import image from './Logo.svg'

function Footer(){
    return(
        <footer>
            <img src={image} alt="Logo" />
            <div>
              Doormat Navigation <br />
              Home <br /> 
              About <br />
              Menu <br />
              Reservations <br />
              Order Online <br />
              Login
            </div>
            <div>
              Contact <br />
              Adress <br /> 
              Phone Number <br />
              Email <br />
            </div>
            <div>
              Social Media Links <br />
              Adress <br /> 
              Phone Number <br />
              Email <br />
            </div>
        </footer>
    )
}

export default Footer