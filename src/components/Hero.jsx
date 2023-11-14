import React from 'react'
import "./Hero.css"

const Hero = (props) => {
  return (
    <section>
    <article className={props.cname}>
        <img  src={props.heroImg} alt="bg" />
        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <div className="show">
          <a href="/contact" className={props.btnClass}>{props.buttonText}</a>   
            </div>
            
        </div>
          
        
    </article>
    </section>
    
  )
}

export default Hero