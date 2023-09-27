import React from 'react'
import Hero from '../components/Hero'
import bg from "../assets/terms.jpg"
import TermsData from '../components/TermsData'
import "./Terms.css"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { WhatsAppIcon } from '../components/WhatsAppIcon'

const Terms = () => {
  return (
    <main  >
      <Navbar />
      <Hero 
        cname="hero-mid"
        heroImg={bg}
        title="Terms and Conditions"
    />


      <section className='terms-data'>


      
<div>
<TermsData 
title="Privacy Commitment" 
description="Lorem adipisicing elit. Quam ex nulla explicabo sunt at ratione ab alias fugiat, voluptas earum.ab alias fugiat, voluptas earum.dolor sit amet consectetur adipisicing elit. Quam ex nulla explicabo sunt at ratione ab alias fugiat, voluptas earumipsum dolor sit amet consectetur adipisicing elit. Quam ex nulla explicabo sunt at ratione ab alias fugiat, voluptas earum."
/>
<TermsData 
title="What information do we collect?" 
description="Lorem adipisicing elit. Quam ex nulla explicabo sunt at ratione ab alias fugiat, voluptas earum.ab alias fugiat, voluptas earum.dolor sit amet consectetur adipisicing elit. Quam ex nulla explicabo sunt at ratione ab alias fugiat, voluptas earumipsum dolor sit amet consectetur adipisicing elit. Quam ex nulla explicabo sunt at ratione ab alias fugiat, voluptas earum."
/>
<TermsData 
title="What do we use your information for?" 
description="Lorem adipisicing elit. Quam ex nulla explicabo sunt at ratione ab alias fugiat, voluptas earum.ab alias fugiat, voluptas earum.dolor sit amet consectetur adipisicing elit. Quam ex nulla explicabo sunt at ratione ab alias fugiat, voluptas earumipsum dolor sit amet consectetur adipisicing elit. Quam ex nulla explicabo sunt at ratione ab alias fugiat, voluptas earum."
/>

</div>
      </section>
             
            
      <WhatsAppIcon  />
    <Footer />    
    </main>
  )
}

export default Terms