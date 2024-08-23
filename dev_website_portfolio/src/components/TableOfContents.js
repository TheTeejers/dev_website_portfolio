import React, { useState } from 'react';

import './TableOfContents.css';

const TableOfContents = (props) => {
    const content = props.content.tableOfContents;


    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [startBlank, setStartBlank] = useState(null);

    const handleHover = (index, isHovered) => {
        setHoveredIndex(isHovered ? index : null);
        setStartBlank('unhovered')
    };

    const handleClick = (topicObject, index) => {
        props.onTopicClick({ topicObject, index });

    };

    return (
        <div className='tableOfContents'>
            <div className='myNameContainer'>
            {/* <h1 className={`myName first`}><span className='myName'>{content.myName[0]}{content.myName[1]}</span> </h1>
            <h1 className={`myName last`}> <span className='myName' >{content.myName[2]}</span><span className='myName'>{content.myName[3]}</span><span className='myName'>{content.myName[4]}</span></h1> */}

                <h1 className={`myName first`}><span className='flicker0 myName'>{content.myName[0]}{content.myName[1]}</span> </h1>
                <h1 className={`myName last`}> <span className='flicker1 myName'>{content.myName[2]}</span><span className={`${startBlank === '' ? 'flicker2' : 'myName'}`}>{content.myName[3]}</span><span className={`${startBlank === '' ? 'flicker3' : 'myName'}`}>{content.myName[4]}</span></h1>
            </div>
            <div className='workTitles'>
                {content.workTitle.map((title, index) => (
                    <h3
                        key={index}
                        className={`workTitle w${index}`}>
                        {title}
                    </h3>
                ))}

            </div>
            <div className='chapterList'>

                {content.selfTopics.map((topicObject, index) => (
                    <p
                        key={index}
                        className={`chapters ${hoveredIndex === index && startBlank !== null ? 'hovered' : (hoveredIndex === index && startBlank === null ? startBlank : null)}`}
                        onMouseOver={() => handleHover(index, true)}
                        onMouseOut={() => handleHover(index, false)}
                        onClick={() => handleClick(topicObject, index)}
                    >
                        <span className={`spanBar ${hoveredIndex === index ? 'hovered' : startBlank} left`}></span>
                        {Object.values(topicObject)}
                        <span className={`spanBar ${hoveredIndex === index ? 'hovered' : startBlank} right`}></span>
                    </p>
                ))}
            </div>


        </div>
    );
};


export default TableOfContents;
