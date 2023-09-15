import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import bg from "../assets/mikumi.jpg"
import Footer from '../components/Footer'

const Safaris = () => {
  return (
    <main>
        <Navbar />
        <Hero 
                cname="hero-mid"
                heroImg={bg}
                title="Wild life safari"
    />
    <Footer />
        
    </main>
  )
}

export default Safaris