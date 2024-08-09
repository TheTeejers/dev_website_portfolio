import React, { useRef, useState } from 'react';
import './Home.css';
import TJSelfie from '../assets/selfie_pic.jpg';
import useDistance from '../functions/useMousePosition.js';
import calculateShadow from '../functions/calculateShadow.js';
import MyHobbies from './TextContent';

const Home = () => {
    const imageRef = useRef(null);
    const { bigX, bigY } = useDistance(imageRef);
    const shadowStyle = calculateShadow(bigX, bigY);
    const [isDivVisible, setIsDivVisible] = useState(false);
    const [isImageHovered, setIsImageHovered] = useState(false);
    const [divAnimation, setDivAnimation] = useState(null);


    const handleClick = () => {

        setIsDivVisible(!isDivVisible);
        setDivAnimation(isDivVisible ? 'fadeOut' : 'fadeIn');

    };

    const handleImageHover = (event) => {
        setIsImageHovered(event.type === 'mouseover');
    };

    return (
        <div className='aboutMe'>
            <div className="image-container">
                <button style={{
                    boxShadow: `${shadowStyle.offsetX} ${shadowStyle.offsetY} ${shadowStyle.blur} ${shadowStyle.color}`
                }} className={`imgButton `} onClick={handleClick}>
                    <img ref={imageRef} src={TJSelfie} className={`imageCover ${isImageHovered ? 'hovered' : ''}`} alt="TJ selfie"
                        onMouseOver={handleImageHover}
                        onMouseOut={handleImageHover}
                    />
                </button>
            </div>

            {(isDivVisible && (
                <div className={`visibleDiv ${divAnimation}`}>
                    <MyHobbies />
                </div>
            )
            )}

        </div>
    );
};

export default Home;
