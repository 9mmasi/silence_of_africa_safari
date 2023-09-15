import React from 'react'
import Hero from '../components/Hero'
import bg from "../assets/zenji.jpg"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Beach = () => {
  return (
    <main>
        <Navbar/>
            <Hero 
                cname="hero-mid"
                heroImg={bg}
                title="Beach Holiday"
    />
    <Footer />
    </main>
  )
}

export default Beach