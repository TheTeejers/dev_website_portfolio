import '../App.css';
import '@fontsource-variable/cinzel'
import { useState, useEffect } from 'react';

import { getRandomXDigitWithSign, getRandomYDigitWithSign } from '../functions/randomNumberGenerator.js';
import './TextContent.css';
import Topic from './Topic.js';

const TopicWindow = (props) => {
    const [translateX, setTranslateX] = useState(150);
    const [translateY, setTranslateY] = useState(150);
    console.log(props);


    useEffect(() => {
        if (props.visibleTopic !== null) {


            setTranslateX(0);
            setTranslateY(0);
        }
    }, [props.visibleTopic]);

    const closeOpenTopicWindow = () => {
        setTranslateX(getRandomXDigitWithSign());
        setTranslateY(getRandomYDigitWithSign());
        setTimeout(() => props.setVisibleTopic(null), 750);
    }

    return (
        <div className={`topicSelectedDiv ${props.visibleTopic !== null ? '' : 'fadeOut'}`}
            style={{
                transform: `translate(${translateX}vw, ${translateY}vh)`,
            }}>
            <button className='closeTopicButton' onClick={() => closeOpenTopicWindow()}>close</button>
            <Topic data={props.info[props.visibleTopic]} topicSelected={props.visibleTopic} />


        </div>
    );
};

export default TopicWindow;
