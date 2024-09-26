import React from 'react';
import './Vignette.css';

function Vignette({ title, cover }) {
  return (
    <div className="vignette">
      <img src={cover} alt={title} className="vignette-cover" />
      <h2 className="vignette-title">{title}</h2>
    </div>
  );
}

export default Vignette;