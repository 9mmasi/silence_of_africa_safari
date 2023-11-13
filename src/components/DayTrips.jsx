import React from 'react';
import './daytrip.css'; // Make sure to import your CSS file
import bg8 from "../assets/chemka.jpeg"
import bg9 from "../assets/ArushaNP.jpeg"
const DayTrips = () => {
  return (
    <section className='dayTrips'>
        <div className='day-trip'>
            <h2>Tanzania Day Trips</h2>
            <p>Explore Tanzania's beauty in a day trip: Tarangire,lake Manyara, and wildlife-rich destinations await your discovery</p>

        </div>
        <div className="container">
      <div className="image-column">
        <img src={bg8} alt="Your Image Alt Text" />
      </div>
      <div className="text-column">
        <h2>Kikuletwa Hot Springs</h2>
        <p>
        Kikuletwa Hot Springs, also known as Chemka Hot Spring, offers a serene retreat and stands out as one of the top relaxation spots in both Arusha and Moshi. Renowned for its rejuvenating ambiance, the hot spring provides an ideal escape for those seeking tranquility and is considered a must-visit Day Trip attraction in the region.
        </p>
        <button>Plan your day trip</button>
      </div>
    </div>
    <div className="container">
    <div className="text-column">
        <h2>Arusha National Park</h2>
        <p>
        Embark on a unique Tanzanian Safari starting at Arusha National Park, nestled by Mount Meru. Known for lush landscapes, serene lakes, and black and white colobus monkeys, it offers an intimate walking safari. Get up-close with wildlife, a rare experience found in select national parks.
        </p>
       
      </div>
      <div className="image-column">
        <img src={bg9} alt="Your Image Alt Text" />
        <button>Plan your day trip</button>
      </div>
      
    </div>
    </section>
    
  );
};

export default DayTrips;
