import './App.css';
import '@fontsource-variable/cinzel'
import { useState } from 'react';
import TableOfContents from './components/TableOfContents.js';
import Content from './content/Content.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import TopicWindow from './components/TopicWindow.js';


function App() {
  const [visibleTopic, setVisibleTopic] = useState(null);
  const content = Content();

  const showTopicClicked = (props) => {
    setVisibleTopic(Object.keys(props.topicObject)[0])

  };

  return (
    <div className="App">
      <Header />
      <TableOfContents content={content} onTopicClick={showTopicClicked} />
      <Footer content={content.contact} visibleTopic={visibleTopic}/>
      <TopicWindow info={content} visibleTopic={visibleTopic} setVisibleTopic={setVisibleTopic} />
      
    </div>

  );
}

export default App;
