import React, { useState } from 'react';
import './Collapse.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'; 

function Collapse({ title, content }) {
// Utilisation d'un state pour contrôler l'ouverture/la fermeture du composant Collapse //
  const [isOpen, setIsOpen] = useState(false);

// Fonction pour basculer entre ouvert et fermé //
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-header">
        <h3>{title}</h3>
        {/* Chevron qui tourne */}
        <FontAwesomeIcon 
          icon={faChevronUp} 
          className={`collapse-chevron ${isOpen ? 'open' : ''}`} 
          onClick={toggleCollapse}
        />
      </div>
      {/* Contenu qui se déploie avec une transition */}
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Collapse;
