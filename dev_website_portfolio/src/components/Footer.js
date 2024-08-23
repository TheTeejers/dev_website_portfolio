import React, { useState } from 'react';
import './HeaderFooter.css';
import gmail from '../assets/gmail.png';
import gitHub from '../assets/github.png';
import faceBook from '../assets/facebook.png';
import phone from '../assets/phone.png';
import linkedIn from '../assets/linkedin.png';

const Footer = (props) => {


  const contact = props.content;
  const [isImageHovered, setIsImageHovered] = useState(null);

  const handleImageHover = (event, icon) => {
    setIsImageHovered(event.type === 'mouseover' ? icon : null);
  };

  return (
    <footer style={{ pointerEvents: `${props.visibleTopic !== null ? 'none' : 'auto'}` }}>
      <div className="div-with-bars foot"></div>
      <div className="social-media-icons">
        <a
          className="iconLinks linkedIn"
          href={contact.linkedIn}
          target="blank"
        >
          <img
            src={linkedIn}
            alt="LinkedIn"
            className={`linkedIcons ${isImageHovered === 'linkedIn' ? 'hovered' : 'unhovered'}`}
            onMouseOver={(e) => handleImageHover(e, 'linkedIn')}
            onMouseOut={handleImageHover}
          />
        </a>

        <a
          className="iconLinks github"
          href={contact.gitHub}
          target="blank">
          <img
            src={gitHub}
            alt="GitHub"
            className={`linkedIcons ${isImageHovered === 'github' ? 'hovered' : 'unhovered'}`}
            onMouseOver={(e) => handleImageHover(e, 'github')}
            onMouseOut={handleImageHover}
          />
        </a>
        <a
          className="iconLinks gmail"
          href={`mailto:${contact.email}?subject=Message%20from%20TJLoughry.com`}>
          <img
            src={gmail}
            alt="gmail"
            className={`linkedIcons ${isImageHovered === 'gmail' ? 'hovered' : 'unhovered'}`}
            onMouseOver={(e) => handleImageHover(e, 'gmail')}
            onMouseOut={handleImageHover}
          />
        </a>
        {/* <a
          className="iconLinks"
          href={contact.faceBook}
          target="blank"
        >
          <img
            src={faceBook}
            alt="Facebook"
            className={`linkedIcons ${isImageHovered === 'facebook' ? 'hovered' : 'unhovered'}`}
            onMouseOver={(e) => handleImageHover(e, 'facebook')}
            onMouseOut={handleImageHover}
          />
        </a> */}
        <a
          className="iconLinks phone"
          href={`tel: ${contact.phone}`}
          target="blank">
          <img
            src={phone}
            alt="phone"
            className={`linkedIcons ${isImageHovered === 'phone' ? 'hovered' : 'unhovered'}`}
            onMouseOver={(e) => handleImageHover(e, 'phone')}
            onMouseOut={handleImageHover}
          />

        </a>

      </div>
    </footer>
  );
};

export default Footer;
