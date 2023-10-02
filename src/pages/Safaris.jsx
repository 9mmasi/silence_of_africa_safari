import React, { useState } from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import bg from "../assets/mikumi.jpg"
import Footer from '../components/Footer'
import { useGlobalContext } from '../../Context'


const Safaris = () => {
  const {packages}=useGlobalContext()
  const[category,setCategory]=useState("safari")
  return (
    <main>
        <Navbar />
        <Hero 
                cname="hero-mid"
                heroImg={bg}
                title="Wild life safari"
    />
    <section>
      <div>
      <div className="hiking-head-title">
          <h1>Wildlife Safari Deals</h1>
          
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
        
              <div className='cardTail'>
                <div><i className="fa-solid fa-money-bill"></i> ${item.price}</div>
                <div><i className="fa-regular fa-calendar-days"></i> {item.duration}</div>
                
              </div>
            </article>
            )

            
          }
          
        })}
        </div>
      </div>
    </section>
    <Footer />
        
    </main>
  )
}

export default Safaris