import React from 'react'

import Navbar from '../components/Navbar'

import Hero from '../components/Hero'
import bg from "../assets/contacthero.jpg"
import Footer from "../components/Footer"
import ContactForm from '../components/ContactForm'


const Contact = () => {
  return (
<main>
    <Navbar />
    <Hero 
        cname="hero-mid"
        heroImg={bg}
        title="Contact"
    />
    <ContactForm />
    
    <Footer />

</main>
  )
}

export default Contact