import React from 'react'
import img1 from '.././assets/greek salad.jpg'
import img2 from '.././assets/bruschetta.jpg'
import img3 from '.././assets/lemon dessert.jpg'

function Menu() {
  return (
    <body>
        <section class="menu" id="menu">
            <div class="heading">
                <h2>This weeks specials!</h2>
                <p>Online Menu</p>
            </div>
            <div class="menu-container">
                <div class="box">
                    <div class="box-img">
                        <img src={img1} />
                    </div>
                    <h2>Greek Salad</h2>
                    <span>$12.98</span>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta, garnished with crunchy garlic and rosmary croutons</p>
                    <i class="bx bx-cart-alt"> Order a delivery</i>
                </div>
                <div class="box">
                    <div class="box-img">
                        <img src={img2} />
                    </div>
                    <h2>Bruschetta</h2>
                    <span>$5.99</span>
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil</p>
                    <i class="bx bx-cart-alt"> Order a delivery</i>
                </div>
                <div class="box">
                    <div class="box-img">
                        <img src={img3} />
                    </div>
                    <h2>Lemon Dessert</h2>
                    <span>$5.00</span>
                    <p>This comes straight from Grandma’s recipe book, every last ingredient has been sourced and is an authentic as can be imagined.</p>
                    <i class="bx bx-cart-alt"> Order a delivery</i>
                </div>
            </div>
        </section>
    </body>
  )
}

export default Menu