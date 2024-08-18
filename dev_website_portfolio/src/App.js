import './App.css';
import '@fontsource-variable/cinzel'
import { useState } from 'react';
import TableOfContents from './components/TextContent.js';
import Bonus from './components/Bonus.js';
import AboutMe from './components/AboutMe.js';
import Content from './content/Content.js';
import ContactSection from './components/Contact.js';
import Experience from './components/Experience.js';
import Education from './components/Education.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';


function App() {
  const [visibleTopic, setVisibleTopic] = useState(null);
  const [showTopic, setShowTopic] = useState('hide');
  const content = Content();
  const [translateX, setTranslateX] = useState(200);
  const [translateY, setTranslateY] = useState(200);
  const [isTransitionActive, setIsTransitionActive] = useState(false);

  function getRandomDigitWithSign() {
    const randomDigit = Math.floor(Math.random() * 20) + 150; // Generate a random digit between 100 and 200
    const randomSign = Math.random() < 0.5 ? -1 : 1; // Generate a random sign (-1 or 1)
    return randomDigit * randomSign;
  }

  const handleClick = () => {
    setIsTransitionActive(!isTransitionActive);
  };

  // console.log('translateX');
  // console.log(translateX);
  // console.log('translateY');
  // console.log(translateY);


  const resestShowTopic = () => {
    const randomX = getRandomDigitWithSign();
    const randomY = getRandomDigitWithSign(); // You can adjust this value as needed
    setTranslateX(randomX);
    setTranslateY(randomY);
    setIsTransitionActive(!isTransitionActive);
    setTimeout(() => setVisibleTopic(null), 1000);
  }
// console.log(content);

  const showTopicClicked = (props) => {


    setVisibleTopic(Object.keys(props.topicObject)[0])
    setIsTransitionActive(!isTransitionActive);
    // console.log(showTopic);
    // console.log(props);
    setTranslateX(0);
    setTranslateY(0);


  };
  return (
    <div className="App">
      <Header/>
      <div className='tableOfContents'>
      


        <TableOfContents content={content} onTopicClick={showTopicClicked} />
        
      </div>

      <div className="topicSelectedDiv" style={{ transform: `translate(${translateX}%, ${translateY}%)` }}>
        <button className='closeTopicButton' onClick={resestShowTopic}>close</button>
        {/* <div>thing {content[0]}</div> */}
        <div className='topicContainer'>
          {
            (() => {
              switch (visibleTopic) {
                case 'aboutMe':
                  return <AboutMe content={content.aboutMe} key="key" />;
                case 'experience':
                  return <Experience content={content.experience} key="key" />;
                case 'education':
                  return <Education content={content.education} key="education" />;
                case 'bonus':
                  return <Bonus content={content.helloWorld} key="bonus" />;
                case 'contact':
                  return <ContactSection content={content.contact} />;
                default:
                  return;
              }
            })()
          }
        </div>
      </div>
      <div>


      </div>
      <Footer content={content.contact}/>
    </div>
  );
}

export default App;
