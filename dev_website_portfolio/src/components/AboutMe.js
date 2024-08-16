import React from 'react';
import './TextContent.css';


const AboutMeSection = (props, key) => {
    const bio = props.content; // Access data from props
    return (
        <div className='bio'>
            <h1 className='myNameBio'>{bio.myName}</h1>

            {bio.aboutMeTopics.map((topicObject, index) => (
                <div key={index}>
                    <h3>
                        {Object.keys(topicObject)[0]}
                    </h3>
                    <p> 
                        {Object.values(topicObject)[0]}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default AboutMeSection;

