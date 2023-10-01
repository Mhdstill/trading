import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

const StarRating = ({ rating, color = 'black' }) => {
  const renderStars = () => {
    const stars = [];
    const totalStars = 5;

    for (let i = 0; i < totalStars; i++) {
      if (i < rating) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: color }} />);
      } else if (i === Math.ceil(rating) - 1 && rating % 1 !== 0) {
        stars.push(<FontAwesomeIcon key={i} icon={faStarHalf} style={{ color: color }} />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStarEmpty} style={{ color: color }} />);
      }
    }

    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default StarRating;
