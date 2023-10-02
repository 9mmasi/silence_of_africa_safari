import React, { useState } from 'react'
import Hero from '../components/Hero'
import bg from "../assets/beachhero.jpg"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useGlobalContext } from '../../Context'


const Beach = () => {
  const{packages}=useGlobalContext()
  const[category,setCategory]=useState('beach')
  return (
    <main>
        <Navbar/>
            <Hero 
                cname="hero-mid"
                heroImg={bg}
                title="Beach Holiday"
    />
    <section>
      <div>
      <div className="hiking-head-title">
          <h1>Beach Vacation Deals</h1>
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

export default Beach