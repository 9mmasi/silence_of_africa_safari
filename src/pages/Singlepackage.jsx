import React from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../../Context';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const Singlepackage = () => {
  const { detailId } = useParams();
  const { packages } = useGlobalContext();

  // Convert `detailId` to a number if needed (assuming package IDs are numbers)
  const detailIdNumber = parseInt(detailId);

  // Find the package by matching the ID
  const item = packages.find((item) => item.id === detailIdNumber);

  if (item) {
    const { title, days,img } = item;

    return (
      <section>
        <Navbar/>
        <Hero 
        cname="hero-mid"
        heroImg={img[0]}
        title={title}/>

        {days.map(day=>{
          return(
            <article className='single-section'>
              <div className="single">

              <div className='iternary'>
                <div className="iternary-sec">
                <p>{day.title}</p>
            <p>{day.desc}</p>
            <p>{day.distance}</p>
            <p>{day.hikingtime}</p>
                </div>
              
              </div>
              <div className='include-exclude'>
<h3>kilimanjaro</h3>
              </div>
              </div>

              
            
            
            
            </article>
            
          )
        })}
        
      </section>
    );
  } else {
    return (
      <section>
        <p>Package not found.</p>
      </section>
    );
  }
};

export default Singlepackage;
