import React from 'react';
import './TextContent.css';
import { Link } from "@react-email/components";


const ContactSection = (props, key) => {
    const contact = props.content;

    return (
        <div className='topicDiv'>
            <h1 className='topicTitle'>{contact.topicTitle}</h1>
            <h3>{contact.myName}</h3>
            <h3>Phone:         <a
          className="iconLinks"
          href={`tel: ${contact.phone}`}
          target="blank">{contact.phone}</a></h3>
            <h3>Email:<a className="iconLinks"
                href={`mailto:${contact.email}`}
                target="blank">tjloughry@gmail.com</a></h3>
            <h3>        <a
          className="iconLinks"
          href={contact.gitHub}>GitHub</a></h3>
            <h3>        <a
          className="iconLinks"
          href={contact.linkedIn}
          target="blank"
        >LinkedIn</a></h3>
        </div>
    );
};

export default ContactSection;