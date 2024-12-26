'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

// const initialValue: number;
const HeartCounter = ({ initialValue }: { initialValue: number }) => {
  const [clicked, setClicked] = useState(false);
  const [count, setCount] = useState(initialValue);

  const handleClick = () => {
    if (!clicked) {
      setCount(count + 1);
      setClicked(true);
    }
  };

  return (
    <div className="heart-container" onClick={handleClick}>
      <FontAwesomeIcon
        icon={faHeart}
        className={`heart-icon ${clicked ? 'clicked' : ''}`}
      />
      <span className="heart-count">{count}</span>
    
    </div>
  );
};

export default HeartCounter;
