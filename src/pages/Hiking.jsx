import React from 'react'
import Hero from '../components/Hero'
import bg from "../assets/hikinghero.jpg"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Hiking = () => {
  return (
    <main>
        <Navbar />
         <Hero 
                cname="hero-mid"
                heroImg={bg}
                title="Climbing and Hiking"
    />
    <Footer />
    </main>
  )
}

export default Hiking