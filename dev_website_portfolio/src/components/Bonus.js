import React from 'react';
import './TextContent.css';
import TJSelfie from '../assets/selfie_pic.jpg';


const Bonus = (props) => {
    const hobbies = props.content; // Access data from props
    console.log(props);
    
    console.log('props.content');
    console.log(hobbies);

    return (
        <div className='topicDiv'>
                           <img

  
                        src={TJSelfie}
                        className={`imageCover `}
                        alt="TJ selfie"

                    />
            <h1 className='topicTitle'>{hobbies.title}</h1>
            {hobbies.paragraphs.map((paragraph, index) => (
                <p className='myHobbies ' key={index}>{paragraph}</p>
            ))}
       
        </div>
    );
};



export default Bonus;

