import React from 'react';
import './TextContent.css';


const Bonus = (props) => {
    const hobbies = props.content; // Access data from props
    console.log(props);
    
    console.log('props.content');
    console.log(hobbies);

    return (
        <div className='hobbies'>
            <h1 className='helloWorld'>{hobbies.title}</h1>
            {hobbies.paragraphs.map((paragraph, index) => (
                <p className='myHobbies ' key={index}>{paragraph}</p>
            ))}
       
        </div>
    );
};



export default Bonus;

