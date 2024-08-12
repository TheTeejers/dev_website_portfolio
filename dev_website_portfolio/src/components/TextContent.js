import React, { useState } from 'react'; // Import useState

import './TextContent.css';


const MyHobbies = () => {
    const content = {
        title: 'Hello World!!!',
        paragraphs: [
            'I’d love to share a bit more about my background and interests outside of work. Aside from being passionate about web development, I’m also an avid woodworker. There’s something incredibly satisfying about taking raw materials and transforming them into something both functional and beautiful. This hobby has taught me a lot about patience, precision, and the importance of planning ahead, which I find translates really well into my coding projects.',

            'When I’m working on a coding project, I often think about it in the same way I do a woodworking piece. I envision the final product, plan out how all the parts will come together, and pay close attention to the details to ensure everything fits perfectly. This mindset helps me write clean, efficient code and design intuitive user interfaces.',

            'Also, I believe in continuous learning and improvement, whether it’s mastering a new framework in web development or learning a new woodworking technique. I’m always eager to take on new challenges and find innovative solutions, which keeps me motivated and engaged in my work.',

            'So, while my resume covers my professional qualifications, I think these personal interests and values really highlight who I am and how I approach my work.'
        ]
    };

    return (
        <div className='hobbies'>
            <h1 className='helloWorld'>{content.title}</h1>
            {content.paragraphs.map((paragraph, index) => (
                <p className='myHobbies ' key={index}>{paragraph}</p>
            ))}
        </div>
    );
};




const TableOfContents = () => {
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    const [pageLoad, setPageLoad] = useState(false);

    const handleHover = (index, isHovered) => {
        console.log('page load 1: ' + pageLoad);
        console.log('hoveredIndex 1 ' + hoveredIndex);
        setPageLoad(true);
       
      setHoveredIndex(isHovered ? index : -1);
      
      console.log('page load 2: ' + pageLoad);
      console.log('hoveredIndex 2 ' + hoveredIndex);
      
      
      
    };
  
    const content = {
      title: 'TJ Loughry',
      paragraphs: [
        'About Me',
        'Experience',
        'Education',
        'Contact',
      ],
    };
  
    return (
      <div className='tableOfContents'>
        <div>
          <h1 className='myName'>{content.title}</h1>
          <h3 className='workTitle'>Software and Web Developer</h3>
          {content.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`chapters ${hoveredIndex === index ? 'hovered' : ''}`}
              onMouseOver={() => handleHover(index, true)}
              onMouseOut={() => handleHover(index, false)}
            >
             <span className={`spanBar ${hoveredIndex === index ? 'hovered' :((!pageLoad && hoveredIndex === -1 ) ? '' : 'fadeOutBar')   }`}></span>
             &nbsp;
              {paragraph}
              &nbsp;
              <span className={`spanBar ${hoveredIndex === index ? 'hovered' :((!pageLoad && hoveredIndex === -1 ) ? '' : 'fadeOutBar')   }`}></span>
            </p>
          ))}
        </div>
      </div>
    );
  };
  





export default { MyHobbies, TableOfContents };
