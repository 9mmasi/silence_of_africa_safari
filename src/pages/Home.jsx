import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import bg from "../assets/kili.jpg"
import Footer from '../components/Footer'
import Destinations from '../components/Destinations'
import Trip from '../components/Trip'
import Faq from '../components/Faq'
import Magicalsafari from '../components/Magicalsafari'
import { WhatsAppIcon } from '../components/WhatsAppIcon'



const Home = () => {
  return (
    <>
    <main>
        <Navbar />
        <Hero 
        cname="hero"
        heroImg={bg}
        title="Lorem ipsum dolor sit."
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt."
        buttonText="plan your trip" 
        btnClass="showbtn"
        />
        <Magicalsafari />
        <Destinations />
        <Trip />
        <Faq />
        <WhatsAppIcon />
        
        <Footer />
        
    </main>
    </>
  )
}

export default Home