import React from 'react';
import './StarRating.css';

const StarRating = ({ rating, maxRating = 5 }) => {
  const filledStars = Math.round(rating); // Calcul avec arrondi au cas où le rating n'est pas un nombre entier //
  const emptyStars = maxRating - filledStars;

return (
    <div className="star-rating">
      {/* Étoiles remplies */}
      {Array(filledStars).fill().map((_, index) => (
        <i key={`filled-${index}`} className="fa-solid fa-star star-filled"></i>
      ))}

      {/* Étoiles vides */}
      {Array(emptyStars).fill().map((_, index) => (
        <i key={`empty-${index}`} className="fa-regular fa-star star-empty"></i>
      ))}
    </div>
  );
};

export default StarRating;
