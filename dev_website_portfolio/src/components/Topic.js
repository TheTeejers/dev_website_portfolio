import './TextContent.css';
import TJSelfie from '../assets/selfie_pic.jpg';
import gmail from '../assets/gmail.png';
import gitHub from '../assets/github.png';
import faceBook from '../assets/facebook.png';
import phone from '../assets/phone.png';
import linkedIn from '../assets/linkedin.png';
import ContactForm from './ContactForm';


const Topic = (props) => {
    // console.log('props');
    // console.log(props);



    return (

        <div className='topicContainer' >
            {
                (() => {
                    switch (props.topicSelected) {
                        case 'aboutMe':
                            return (
                                <div className='topicDiv'>
                                    <h1 className='topicTitle'>{props.data.title}</h1>

                                    {props.data.aboutMeTopics.map((topicObject, index) => (
                                        <div key={index}>
                                            <h3 className='paragraph-sections'>
                                                {Object.keys(topicObject)[0]}
                                            </h3>
                                            <p className='indented-paragraph'>
                                                {Object.values(topicObject)[0]}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            );
                        case 'experience':
                            console.log(props);
                            return (
                                <div className='topicDiv'>
                                    <h1 className='topicTitle'>{props.data[0].topicTitle}</h1>

                                    {props.data.map((topicObject, index) => (
                                        <div key={index}>
                                            <h3 className='paragraph-sections'>
                                                {topicObject.company}
                                            </h3>
                                            <p className='paragraph-subsections'>
                                                {topicObject.title}
                                            </p>
                                            <p className='indented-paragraph'>
                                                {topicObject.dates}
                                            </p>
                                            {Array.isArray(topicObject.responsibilities) && (
                                                <div>

                                                    {topicObject.responsibilities.map((responsibility, index) => (
                                                        <ul key={index}>
                                                            <li className='responsibility'>{responsibility}</li>
                                                        </ul>
                                                    ))}
                                                </div>
                                            )}

                                        </div>
                                    ))}
                                </div>
                            );
                        case 'education':
                            return (
                                <div className='topicDiv'>
                                    <h1 className='topicTitle'>{props.data[0].topicTitle}</h1>

                                    {props.data.map((topicObject, index) => (
                                        <div key={index}>
                                            <h3 className='paragraph-sections'>
                                                {topicObject.school}
                                            </h3>
                                            <p className='paragraph-subsections'>
                                                {topicObject.program}
                                            </p>
                                            <p className='indented-paragraph'>
                                                {topicObject.degree}
                                            </p>
                                            <p className='responsibility'>
                                                {topicObject.details}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            );

                        case 'contact':
                            return (
                                <div className='topicDiv'>

                                    <h1 className='topicTitle'>{props.data.topicTitle}</h1>
                                    <div className='contactPage'>
                                        <div className='contactLinks'>
                                            <h2 className='paragraph-sections'>{props.data.myName}</h2>
                                            <h3>
                                                <a
                                                    className='linkedText'
                                                    href={`tel: ${props.data.phone}`}
                                                    target="blank">         <img
                                                        src={phone}
                                                        alt="Phone"
                                                        className={`contactIcons`}

                                                    />{props.data.phone}</a>
                                            </h3>
                                            <h3>
                                                <a className="linkedText"
                                                    href={`mailto:${props.data.email}`}
                                                    target="blank">         <img
                                                        src={gmail}
                                                        alt="gmail"
                                                        className={`contactIcons`}

                                                    />tjloughry@gmail.com</a>
                                            </h3>
                                            <h3>

                                                <a
                                                    className="linkedText"
                                                    href={props.data.gitHub}>
                                                    <img
                                                        src={gitHub}
                                                        alt="GitHub"
                                                        className={`contactIcons`}

                                                    />GitHub</a>
                                            </h3>
                                            <h3>

                                                <a
                                                    className="linkedText"
                                                    href={props.data.linkedIn}
                                                    target="blank"
                                                >          <img
                                                        src={linkedIn}
                                                        alt="LinkedIn"
                                                        className={`contactIcons`}

                                                    />LinkedIn</a>
                                            </h3>
                                        </div>
                                        <ContactForm />
                                    </div>
                                </div>
                            );
                        case 'bonus':
                            return (
                                <div className='topicDiv'>

                                    <h1 className='topicTitle'>
                                        {props.data.title}</h1>
                                    <img
                                        src={TJSelfie}
                                        className={`imageCover `}
                                        alt="TJ selfie"

                                    />
                                    {props.data.paragraphs.map((paragraph, index) => (
                                        <p className='indented-paragraph' key={index}>{paragraph}</p>
                                    ))}

                                </div>
                            );
                        default:
                            return;
                    }
                })()
            }
        </div>

    );
};

export default Topic;
