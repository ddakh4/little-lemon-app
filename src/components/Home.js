import React from 'react'
import RestaurantImg from '../assets/restaurantfood.jpg'

function Home(){
    return(
        <body>
                <section class="home" id="home">
                    <div class="home-left">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <button className='reserve-table'>Reserve a Table</button>
                    </div>
                    <div class="home-right">
                    <img src={RestaurantImg} alt="" />
                    </div>
                </section>
        </body>
    )
}

export default Home