import React from 'react';
import './Vignette.css';
import { Link } from 'react-router-dom';

function Vignette({ title, cover, id }) {
  return (
    <div className="vignette">
      <Link to={`/logement/${id}`}>
        <img src={cover} alt={title} className="vignette-cover" />
        <h2 className="vignette-title">{title}</h2>
      </Link>
    </div>
  );
}

export default Vignette;