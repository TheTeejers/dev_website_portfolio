import './App.css';
import '@fontsource-variable/cinzel'
import { useState } from 'react';
import TableOfContents from './components/TableOfContents.js';
import Content from './content/Content.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import TopicWindow from './components/TopicWindow.js';
import { useSpring, animated } from '@react-spring/web'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZODWdKBgN7mb6mUTSQ4jk38QHSpxzJ1w",
  authDomain: "newcontactform-2b27e.firebaseapp.com",
  databaseURL: "https://newcontactform-2b27e-default-rtdb.firebaseio.com",
  projectId: "newcontactform-2b27e",
  storageBucket: "newcontactform-2b27e.appspot.com",
  messagingSenderId: "537999855894",
  appId: "1:537999855894:web:8355dbd52ed387a3474037"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);


function App() {
  const [visibleTopic, setVisibleTopic] = useState(null);
  const content = Content();
  const [isVisible, setIsVisible] = useState(false)

  const [pageTypeSelected, setPageTypeSelected] = useState(null)

  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 24,
    color: '#000'
  })


  const props2 = useSpring({
    from: { opacity: 0, color: 'white' },
    to: { opacity: 1, color: 'green' },
  })



  const showTopicClicked = (props) => {
    setVisibleTopic(Object.keys(props.topicObject)[0])

  };

  const pageType = () => {
    setPageTypeSelected(pageTypeSelected === null ? 'neon' : null)
    setIsVisible(!isVisible);

  }

  return (
    <div className={`${pageTypeSelected} App `}>
      {/* <button style={props2} onClick={pageType}>Change it up</button> */}


      <Header />
      <TableOfContents content={content} onTopicClick={showTopicClicked} />
      <Footer content={content.contact} visibleTopic={visibleTopic} />
      <TopicWindow info={content} visibleTopic={visibleTopic} setVisibleTopic={setVisibleTopic} />

    </div>

  );
}

export default App;
