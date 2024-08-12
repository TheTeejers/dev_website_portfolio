import React, { useRef, useState, useEffect } from 'react';
import './BioComponent.css';
import TJSelfie from '../assets/selfie_pic.jpg';
import useDistance from '../functions/useMousePosition.js';
import calculateShadow from '../functions/calculateShadow.js';
import TextContent from './TextContent.js';

const BioComponent = () => {
  const { MyHobbies, TableOfContents } = TextContent;
  const imageRef = useRef(null);
  const { bigX, bigY } = useDistance(imageRef);
  const shadowStyle = calculateShadow(bigX, bigY);
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [divAnimation, setDivAnimation] = useState(null);
  const divRef = useRef(null);

  const handleClick = (event) => {
    console.log("thing");
    
    console.log(event);
    setIsDivVisible(!isDivVisible); // Toggle visibility immediately
    setDivAnimation(isDivVisible ? 'fadeOut' : 'fadeIn');
  };

  const handleImageHover = (event) => {
    setIsImageHovered(event.type === 'mouseover');
  };

  const handleClickOutside = (event) => {
    console.log("here");
    console.log(divRef.current);
    console.log(divRef.current.contains(event.target));
    
    
    
    if (isDivVisible && divRef.current && !divRef.current.contains(event.target)) {
      
      setDivAnimation('fadeOut'); // Trigger fade out animation
      setIsDivVisible(false);
    }
  };

  useEffect(() => {
    const handleClickOutsideEvent = (event) => {
      handleClickOutside(event);
    };

    if (isDivVisible) {
      document.addEventListener('mousedown', handleClickOutsideEvent);
    } else {
      document.removeEventListener('mousedown', handleClickOutsideEvent);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideEvent);
    };
  }, [isDivVisible]);

  return (
    <div className='aboutMe'>
      <div className="image-container">
        <button className={`imgButton ${isImageHovered ? 'hovered' : ''}`} onClick={handleClick}>
          <img
            style={{
              boxShadow: `${shadowStyle.offsetX} ${shadowStyle.offsetY} ${shadowStyle.blur} ${shadowStyle.color}`,
            }}
            ref={imageRef}
            src={TJSelfie}
            className={`imageCover ${isImageHovered ? 'hovered' : ''}`}
            alt="TJ selfie"
            onMouseOver={handleImageHover}
            onMouseOut={handleImageHover}
          />
        </button>
      </div>

      {isDivVisible ? (
        <div ref={divRef} className={`visibleDiv ${divAnimation}`}>
          <MyHobbies />
        </div>
      ) : (
        <div className='TOC'>
          <TableOfContents />
        </div>
      )}
    </div>
  );
};

export default BioComponent;
