import './App.css';
import '@fontsource-variable/cinzel'
import { useState } from 'react';
import TableOfContents from './components/TableOfContents.js';
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
  const content = Content();
  const [translateX, setTranslateX] = useState(200);
  const [translateY, setTranslateY] = useState(200);
  const [isTransitionActive, setIsTransitionActive] = useState(false);
  // const randomX = getRandomDigitWithSign();
  // const randomY = (getRandomDigitWithSign() > 0 ? getRandomDigitWithSign() - 150 : getRandomDigitWithSign() + 150) ;

  function getRandomXDigitWithSign() {
    const randomDigit = Math.floor(Math.random() * 100) + 100; // Generate a random digit between 0 and 200
    const randomSign = Math.random() < 0.5 ? -1 : 1; // Generate a random sign (-1 or 1)
    return randomDigit * randomSign;
  }

  function getRandomYDigitWithSign() {
    const randomDigit = Math.floor(Math.random() * 100); // Generate a random digit between 0 and 200
    const randomSign = Math.random() < 0.5 ? -1 : 1; // Generate a random sign (-1 or 1)
    return randomDigit * randomSign;
  }



  // console.log('translateX');
  // console.log(translateX);
  console.log('translateY');
  console.log(visibleTopic);


  const resestShowTopic = () => {

    setTranslateX(getRandomXDigitWithSign);
    setTranslateY(getRandomYDigitWithSign);
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
      <Header />
      <TableOfContents content={content} onTopicClick={showTopicClicked} />
      <Footer content={content.contact} />


      <div className={`topicSelectedDiv ${(visibleTopic === null ? 'fadeOut' : 'fadeIn')}`}
        style={{
          transform: `translate(${translateX}vw, ${translateY}vh)`,
        }}>
        <button className='closeTopicButton' onClick={resestShowTopic}>close</button>
        <div className='topicContainer' >
          {
            (() => {
              console.log("here we are");

              console.log(content[visibleTopic]);
              console.log('visibleTopic');
              console.log(visibleTopic);

              switch (visibleTopic) {

                case 'aboutMe':


                  return <AboutMe content={content[visibleTopic]} key="key" />;
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
    </div>
  );
}

export default App;
