import React from 'react';
import './TextContent.css';


const Education = (props) => {
    const education = props.content; // Access data from props
    console.log(props);
    
    console.log('education props');
    console.log(education);
    

    return (
        <div className='experience'>
            <h1 className='sectionName'>Education</h1>

            {education.map((topicObject, index) => (
                <div key={index}>
                    <h3>
                            {topicObject.school}
                    </h3>
                    <p> 
                    {topicObject.program}
                    </p>
                    {topicObject.degree}
                    <p> 
                    {topicObject.details}
                    </p>
                </div>
            ))}
        </div>
    );
};



export default Education;