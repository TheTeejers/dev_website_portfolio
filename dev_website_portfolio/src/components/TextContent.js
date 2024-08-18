import React, { useState } from 'react';
import './TextContent.css';



const TableOfContents = (props) => {



    const content = props.content.tableOfContents; // Access data from props


    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [startBlank, setStartBlank] = useState('');

    const handleHover = (index, isHovered) => {
        setHoveredIndex(isHovered ? index : null);
        setStartBlank('unhovered')
    };

    const handleClick = (topicObject, index) => {
        props.onTopicClick({ topicObject, index });

    };

    return (
        <div className='tableOfContents'>
            <div>
                <h1 className={`myName first`}><span className={`${startBlank === '' ? 'flicker0' : 'myName'}`}>{content.myName[0]}{content.myName[1]}</span> </h1>
                <h1 className={`myName last`}> <span className={`${startBlank === '' ? 'flicker1' : 'myName'}`}>{content.myName[2]}</span><span className={`${startBlank === '' ? 'flicker2' : 'myName'}`}>{content.myName[3]}</span><span className={`${startBlank === '' ? 'flicker3' : 'myName'}`}>{content.myName[4]}</span></h1>
                {content.workTitle.map((title, index) => (
                    <h3
                        key={index}
                        className={`workTitle ${title[2]}`} >
                        {title}
                    </h3>
                ))}
                {content.selfTopics.map((topicObject, index) => (   
                                           
                    <p
                        key={index}
                        className={`chapters ${hoveredIndex === index ? 'hovered' : startBlank} ${Object.values(topicObject)}`}
                        onMouseOver={() => handleHover(index, true)}
                        onMouseOut={() => handleHover(index, false)}
                        onClick={() => handleClick(topicObject, index)} // Access the value
                    >
                        <span className={`spanBar ${hoveredIndex === index ? 'hovered' : startBlank} left` }></span>
                        &nbsp;
                        {/* Access the value from the object */}
                        {Object.values(topicObject)}
                        &nbsp;
                        <span className={`spanBar ${hoveredIndex === index ? 'hovered' : startBlank} right`}></span>
                    </p>
                ))}

            </div>
        </div>
    );
};


export default TableOfContents;
