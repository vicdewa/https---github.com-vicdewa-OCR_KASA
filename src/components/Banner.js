import React from 'react';
import './Banner.css'; 

function Banner({image, title}) {
  return (
    <div className="banner">
      {title && <h1 className="banner-title">{title}</h1>}
      <img src={image} alt="Banner" className="banner-image" />
    </div>
  );
}

export default Banner;