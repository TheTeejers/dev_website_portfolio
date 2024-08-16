// import React, { useRef, useState, useEffect } from 'react';
// import './Home.css';
// import TJSelfie from '../assets/selfie_pic.jpg';
// import useDistance from '../functions/useMousePosition.js';
// import calculateShadow from '../functions/calculateShadow.js';
// import TextContent from './TextContent.js';
// import Content from '../content/Content.js';

// const Home = ( props ) => {
//     const { MyHobbies, TableOfContents } = TextContent;
//     const imageRef = useRef(null);
//     const { bigX, bigY } = useDistance(imageRef);
//     const shadowStyle = calculateShadow(bigX, bigY);
//     const [isDivVisible, setIsDivVisible] = useState(false);
//     const [isImageHovered, setIsImageHovered] = useState(null);
//     const [divAnimation, setDivAnimation] = useState(null);
//     const divRef = useRef(null);

//     const content = Content();
//     // const props1 = props.content; 
   
//     // console.log(content);



//     const handleClick = (event) => {
//         setIsDivVisible(!isDivVisible); // Toggle visibility immediately
//         setDivAnimation(isDivVisible ? 'fadeOut' : 'fadeIn');
//     };

//     const handleImageHover = (event) => {
//         setIsImageHovered(event.type === 'mouseover' ? 'hovered' : 'unhovered');
//     };

//     const handleClickOutside = (event) => {
//         if (isDivVisible && divRef.current && !divRef.current.contains(event.target)) {
//             setDivAnimation('fadeOut'); // Trigger fade out animation
//             setIsDivVisible(false);
//         }
//     };

//     const handleTopicClick = ({topic, index}) => {
//         // console.log('Clicked topic:', topic, 'index:', index);
//           console.log('made it to handleTopicClick');
//           console.log(props.onTopicClick);      
//           console.log(topic);
//           console.log(index);
//           console.log(props);
          
          
//     //       props(topic, index)
//     // console.log(onTopicClick)
        
//         // Handle the clicked topic here
//     };

//     // useEffect(() => {
//     //     const handleClickOutsideEvent = (event) => {
//     //         handleClickOutside(event);
//     //     };

//     //     if (isDivVisible) {
//     //         document.addEventListener('mousedown', handleClickOutsideEvent);
//     //     } else {
//     //         document.removeEventListener('mousedown', handleClickOutsideEvent);
//     //     }

//     //     return () => {
//     //         document.removeEventListener('mousedown', handleClickOutsideEvent);
//     //     };
//     // }, [isDivVisible]);

//     return (
//         <div className='aboutMe'>
//             {/* <div className='image-container'>
//                 <button className={`imgButton ${isImageHovered}`} onClick={(handleClick)}>
//                     <img
//                         style={{
//                             boxShadow: `${shadowStyle.offsetX} ${shadowStyle.offsetY} ${shadowStyle.blur} ${shadowStyle.color}`,
//                         }}
//                         ref={imageRef}
//                         src={TJSelfie}
//                         className={`imageCover ${isImageHovered}`}
//                         alt="TJ selfie"
//                         onMouseOver={handleImageHover}
//                         onMouseOut={handleImageHover}
//                     />
//                 </button>
//             </div> */}


//                 <div className='TOC'>
//                     <TableOfContents content={content} onTopicClick={handleTopicClick} />
//                 </div>

 
//         </div>
//     );
// };

// export default Home;
