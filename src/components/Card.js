import React from 'react';
import Vignette from './Vignette';
import './Card.css'; 

function Card({ logements }) {
  return (
    <div className="card-grid">
      {logements.map(logement => (
        <Vignette key={logement.id} title={logement.title} cover={logement.cover} />
      ))}
    </div>
  );
}

export default Card;