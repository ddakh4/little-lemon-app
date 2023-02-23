import React from "react";
import About from '../../components/About'
import Home from '../../components/Home'
import Menu from '../../components/Menu'
import Testimonials from '../../components/Testimonials'

function HomePage() {
    return (
        <>
            <Home />
            <Menu />
            <Testimonials />
            <About />
        </>
    )
}

export default HomePage