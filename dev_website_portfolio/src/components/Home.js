import React, { useRef, useState } from 'react';
import './Home.css';
import TJSelfie from '../assets/selfie_pic.jpg';
import useDistance from '../functions/useMousePosition.js';
import calculateShadow from '../functions/calculateShadow.js';

const Home = () => {
    const imageRef = useRef(null);
    const { bigX, bigY } = useDistance(imageRef);
    const shadowStyle = calculateShadow(bigX, bigY);
    const [isDivVisible, setIsDivVisible] = useState(false);

    const handleClick = () => {
        console.log("CLICKED");
        setIsDivVisible(!isDivVisible);
    };

    return (
        <div className="header">
          <button className="img-button" onClick={handleClick}>
            <img ref={imageRef} src={TJSelfie} className="image--cover" alt="TJ selfie"
              style={{
                boxShadow: `${shadowStyle.offsetX} ${shadowStyle.offsetY} ${shadowStyle.blur} ${shadowStyle.color}`
              }}
            />
          </button>
          <br />
          {/* x: {mouseX}   y: {mouseY} */}
          <br />
          <div>
            distance X: {bigX}
            <br />
            distance Y: {bigY}
          </div>

          {isDivVisible ? (
            <div className="visibleDiv">
              HELLO WORLD
            </div>
          ) : null}
        </div>
      );
};

export default Home;