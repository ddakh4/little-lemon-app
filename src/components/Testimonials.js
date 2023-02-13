import React from 'react'
import test from '.././assets/testimonial.png'

function Testimonials() {
  return (
    <body>
        <section class="test" id="test">
            <div class="heading">
                <h2>Testimonials</h2>
            </div>
            <div class="test-container">
                <div class="test-box">
                    <img src={test} />
                    <h3>Micheal Caldwell</h3>
                    <p>This is the best Mediterranean food that I've ever had!</p>
                </div>
                <div class="test-box">
                    <img src={test} />
                    <h3>Alan Chen</h3>
                    <p>My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here.</p>
                </div>
                <div class="test-box">
                    <img src={test} />
                    <h3>Casey Lau</h3>
                    <p>I've had some great Mediterranean food before, but none of them beats Lttle Lemon in flavor and texture.</p>
                </div>
                <div class="test-box">
                    <img src={test} />
                    <h3>John Rosenblum</h3>
                    <p>Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to.</p>
                </div>
            </div>
        </section>
    </body>
  )
}

export default Testimonials