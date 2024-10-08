import React, { useState } from 'react';
import './Collapse.css'; 

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
        <i 
        onClick={toggleCollapse} 
        className={`fa-solid fa-chevron-up collapse-chevron ${isOpen ? 'open' : ''}`}
        />
      </div>
      {/* Contenu qui se déploie avec une transition */}
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
      {typeof content === 'string' ? <p>{content}</p> : content}
      </div>
    </div>
  );
}

export default Collapse;
