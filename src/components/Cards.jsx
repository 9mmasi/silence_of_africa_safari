import React from 'react';
import "./fourcards.css"

const Card = ({ imageSrc, text,desc }) => {
  return (
    <div className="card">
      <img className="card-image" src={imageSrc} alt="Image" />
      <h2 className="card-text">{text}</h2>
      <p className="card-text">{desc}</p>
    </div>
  );
}



export default Card;
