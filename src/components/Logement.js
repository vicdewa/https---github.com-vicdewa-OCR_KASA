import React from 'react';
import './Logement.css';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../data.json';
import Collapse from './Collapse';
import StarRating from './StarRating';

const Logement = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState(0);
  const logement = data.find(logement => logement.id === id);
  
  if (!logement) {
    navigate('/error');
    return null;
  }
  
  const pictures = logement.pictures;
//Utilisation du modulo pour créer une boucle infinie//
  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % pictures.length);
  };
  const prevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <>
      {/*Slideshow*/}
      <section className="logement">
        <div className="slideshow">
          <img src={pictures[currentImage]} alt={`Slide ${currentImage + 1}`} />
          {pictures.length > 1 && (
          <>
          <button 
          onClick={prevImage} className="prev-btn">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button 
            onClick={nextImage} className="next-btn">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          </>
          )}
        {pictures.length > 1 && (
      <div className="slideshow-counter">
        {currentImage + 1}/{pictures.length}
      </div>
    )}
      </div>
      </section>

      {/*Titre, localisation et tags*/}
      <section className="logement-content">
      <section className="left-column">
        <h1 className="logement-title">{logement.title}</h1>
        <p className="location">{logement.location}</p>
        <div className="tags">
          {logement.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </section>
      
      {/*Profil, Rating*/}
      <section className="right-column">
          <div className="host">
            <p>{logement.host.name}</p>
            <img className="host-picture" src={logement.host.picture} alt={logement.host.name} />
          </div>
          <StarRating rating={logement.rating} className="star-rating"/>
        </section>
      </section>

      {/*Description, équipements*/}
      <section className="collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse 
          title="Équipements" 
          content={(
            <ul className="equipment-list">
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          )}
        />
      </section>
    </>
  );
};

export default Logement;