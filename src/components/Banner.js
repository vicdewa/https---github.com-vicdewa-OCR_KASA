import React from 'react';
import './Banner.css'; 
import bannerImage from './Banner.png';

function Banner() {
  return (
    <div className="banner">
      <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
      <img src={bannerImage} alt="Banner" className="banner-image" />
    </div>
  );
}

export default Banner;