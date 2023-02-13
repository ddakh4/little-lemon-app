import React from 'react'
import img from '.././assets/about.jpg'

function About() {
  return (
    <body>
        <section class="about" id="about">
            <div class="about-text">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
                    Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago,
                    and were inspired to bring the flovors of their hometown in Italy to the people in Chicago.
                    The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.
                </p>
            </div>
            <div class="about-img">
                <img src={img} />
            </div>
        </section>
    </body>
  )
}

export default About