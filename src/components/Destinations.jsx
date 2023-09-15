import React from 'react'

import bg from "../assets/flamingo.jpg"
import bg2 from "../assets/nyara.jpg"
import bg3 from "../assets/serengeti1.jpg"
import bg4 from "../assets/serengeti2.jpg"
import bg5 from "../assets/zanzibar1.jpg"
import bg6 from "../assets/zanzibar2.jpg"
import DestinationData from './DestinationData'


const Destinations = () => {
  return (
    <section className='Destinations'>
        <h1>Popular Destinations</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, saepe?</p>

        <DestinationData 
        cname="destination"
        title="Lake Manyara National Park" 
        text="Lorem adipisicing elit. Quam ex nulla explicabo sunt at ratione ab alias fugiat, voluptas earum.ab alias fugiat, voluptas earum.dolor sit amet consectetur adipisicing elit. Quam ex nulla explicabo sunt at ratione ab alias fugiat, voluptas earumipsum dolor sit amet consectetur adipisicing elit. Quam ex nulla explicabo sunt at ratione ab alias fugiat, voluptas earum."
        bg={bg}
        bg2={bg2}
        />
        <DestinationData 
        cname="destination-reverse"
        title="Serengeti National Park" 
        text="Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ex nulla explicabo sunt at ratione Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ex nulla explicabo sunt at ratione ab alias fugiat, voluptas earum.ab alias fugiat, voluptas earum.dolor sit amet consectetur adipisicing elit. Quam ex nulla explicabo sunt at ratione ab alias fugiat, voluptas earum."
        bg={bg3}
        bg2={bg4}/>
        <DestinationData 
        cname="destination"
        title="Beach Holiday at Zanzibar" 
        text="Lorem adipisicing elit. Quam ex nulla explicabo sunt at ratione ab alias fugiat, voluptas earum.ab alias fugiat, voluptas earum.dolor sit amet consectetur adipisicing elit. Quam ex nulla explicabo sunt at ratione ab alias fugiat, voluptas earum ipsum dolor sit amet consectetur adipisicing elit. Quam ex nulla explicabo sunt at ratione ab alias fugiat, voluptas earum."
        bg={bg5}
        bg2={bg6}/>

    </section>
  )
}

export default Destinations