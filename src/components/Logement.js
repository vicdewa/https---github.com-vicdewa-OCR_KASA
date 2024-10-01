import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const Logement = () => {
  const { id } = useParams();
  const logement = data.find(logement => logement.id === id);
  
  const [currentImage, setCurrentImage] = useState(0);
  const pictures = logement.pictures;
//Utilisation du modulo pour créer une boucle infinie//
  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % pictures.length);
  };
  const prevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <section>
     <div className="slideshow">
        <img src={pictures[currentImage]} alt={`Slide ${currentImage + 1}`} />
        <button onClick={prevImage} className="prev-btn">◀</button>
        <button onClick={nextImage} className="next-btn">▶</button>
      </div>
      <h1>{logement.title}</h1>
      <p>{logement.description}</p>
    </section>
  );
}

export default Logement;