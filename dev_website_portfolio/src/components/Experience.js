import React from 'react';
import './TextContent.css';


const Experience = (props) => {
    const content = props.content; // Access data from props
    console.log(props);
    
    console.log('props.content');
    console.log(content);
    console.log(content.company);

    return (
        <div className='topicDiv'>
            <h1 className='topicTitle'>{content[0].topicTitle}</h1>

            {content.map((topicObject, index) => (
                <div key={index}>
                    <h3>
                            {topicObject.company}
                    </h3>
                    <p> 
                    {topicObject.dates}
                    </p>
                    {Array.isArray(topicObject.responsibilities) && (  
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