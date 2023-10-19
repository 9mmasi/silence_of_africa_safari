import React from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../../Context';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './single.css';

const Singlepackage = () => {
  const { detailId } = useParams();
  const { packages } = useGlobalContext();

  const detailIdNumber = parseInt(detailId);
  const item = packages.find((item) => item.id === detailIdNumber);

  if (item) {
    const { title, days, img } = item;

    return (
      <section>
        <Navbar />
        <Hero cname="hero-mid" heroImg={img[0]} title={title} />

        <div className="responsive-list">
          <div className="list">
             <ul className="list-style">
            {days.map((day) => (
              <li key={day.title}>
                <h3>{day.title}</h3>
                <p>{day.desc}</p>
                <p>Distance:{day.distance}</p>
                <p>Time:{day.hikingtime}</p>
              </li>
            ))}
          </ul>
          </div>
          <div className="ex-in">
            
          </div>
         
        </div>
        <Footer />
      </section>
    );
  } else {
    return (
      <section>
        <p>Package not found</p>
      </section>
    );
  }
};

export default Singlepackage;
