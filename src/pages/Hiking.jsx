import React, { useState } from 'react'
import Hero from '../components/Hero'
import bg from "../assets/hikinghero.jpg"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useGlobalContext } from '../../Context'
import "./Hiking.css"
import { Link } from 'react-router-dom'
import { WhatsAppIcon } from '../components/WhatsAppIcon'

const Hiking = () => {
  const{packages}=useGlobalContext()
  const[category,setCategory]=useState("hiking")
  return (
    <main>
        <Navbar />
         <Hero 
                cname="hero-mid"
                heroImg={bg}
                title="Climbing and Hiking"
    />
    <section className='hiking-section'>
      <div>
        <div className="hiking-head-title">
          <h1>Treaking and Hiking Deals</h1>
          
        </div>
        <div className='trips-card'>
        {packages.map(item=>{
          if (item.category===category) {
            return(
              <article key={item.id} className="tripCard">
              <div className="trip-img">
                  <img src={item.img[0]} alt="img" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
        
              <Link to={`/packages/${item.id}`} className='cardTail'>
                
                <div><i className="fa-solid fa-money-bill"></i> ${item.price}</div>
                <div><i className="fa-regular fa-calendar-days"></i> {item.duration}</div>
                
                </Link>
                
                
              
            </article>
          )

            
          }
          
        })}
        </div>
      </div>
    </section>
      <WhatsAppIcon />
    <Footer />
    </main>
  )
}

export default Hiking
