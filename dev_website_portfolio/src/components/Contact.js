import React from 'react';
import './TextContent.css';


const ContactSection = (props, key) => {
    const contact = props.content; // Access data from props
    console.log(contact);
    
    return (
        <div className='contact'>
            <div className='sectionName'>Contact</div>
            <h1>{contact.myName}</h1>
            <h3>Phone: <span>{contact.phone}</span></h3>
            <h3>Email: <span>{contact.email}</span></h3>
            <h3>{contact.gitHub}</h3>
            <h3>{contact.linkedIn}</h3>
         </div>
    );
};

export default ContactSection;