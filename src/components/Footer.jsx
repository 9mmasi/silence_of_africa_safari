import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
        <article className="top">
            <div>
                <h1>Silence Of Africa Safari</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam aliquid quod labore expedita iste omnis.</p>
            </div>
            <div>
                <a href=""><i className="fa-brands fa-facebook"></i></a>
                <a href=""><i className="fa-brands fa-instagram"></i></a>
                <a href='https://wa.me/+255688410445' target='blank'><i className=" wa fa-brands fa-whatsapp"></i></a>
              
            </div>
        </article>
        <article className="bottom">
            <div>
                <h4>Address Tanzania</h4>
                <p>Plot. 470 Philips</p>
                <p>Arusha, Tanzania</p>
                <p>+25588410445</p>
                <p>+255757348529</p>
            </div>
            <div>
                <p><span><a className="footer-link" href="">Terms and Condition</a></span></p>
            </div>
            
        </article>
        <p className='crafted'>crafted by <a href="">BrainCore</a></p>
    </footer>
  )
}

export default Footer