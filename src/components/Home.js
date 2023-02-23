import React from 'react'
import RestaurantImg from '../assets/restaurantfood.jpg'
import { Link } from 'react-router-dom'

function Home(){
    return(
        <body>
                <section className="home" id="home">
                    <div className="home-left">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <Link className='reserve-table' to="/booking">Reserve a Table</Link>
                    </div>
                    <div className="home-right">
                    <img src={RestaurantImg} alt="" />
                    </div>
                </section>
        </body>
    )
}

export default Home