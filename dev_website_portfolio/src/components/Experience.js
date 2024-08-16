import React from 'react';
import './TextContent.css';


const Experience = (props) => {
    const experience = props.content; // Access data from props
    console.log(props);
    
    console.log('props.content');
    console.log(experience);
    console.log(experience.company);

    return (
        <div className='experience'>
            <h1 className='sectionName'>Experience</h1>

            {experience.map((topicObject, index) => (
                <div key={index}>
                    <h3>
                            {topicObject.company}
                    </h3>
                    <p> 
                    {topicObject.dates}
                    </p>
                    {Array.isArray(topicObject.responsibilities) && (  // Check if it's an array
            <div>
                <h4>Responsibilities</h4>
                {topicObject.responsibilities.map((responsibility, index) => (
                    <ul key={index}>
                        <li>{responsibility}</li>
                    </ul>
                ))}
            </div>
        )}

                </div>
            ))}
        </div>
    );
};



export default Experience;