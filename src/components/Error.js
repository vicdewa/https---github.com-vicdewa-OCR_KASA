import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
  return (
    <div>
      <h1 className="errorTitle">404</h1>
      <p className="errorMessage">Oups! La page que vous demandez n'existe pas.</p>
      <p className="linkError"><Link to="/">Retourner sur la page d'accueil</Link></p>
    </div>
  );
};

export default Error;