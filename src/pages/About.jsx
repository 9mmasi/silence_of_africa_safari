import React from 'react'
import Hero from '../components/Hero'
import bg from "../assets/abouthero.jpg"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



const About = () => {
  return (
    <main>
        <Navbar />
        <Hero 
    cname="hero-mid"
    heroImg={bg}
    title="About Us"
     
    />
      <WhatsAppIcon />
    
    <Footer />

    </main>
  )
}

export default About
