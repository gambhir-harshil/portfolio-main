import React from 'react';
import { Link } from 'react-router-dom';

import './ContactScreen.css'

const ContactScreen = () => {
    return (
        <div className='contact'>
            <div className="contact_nav">
                <Link to='/'>
                    <div className="back">
                            <span>back</span>
                    </div>
                </Link>
            </div>
            <div className="contact_header">
                <div className="contact_heading_wrapper">
                    <h1>Let's make something great!</h1>
                </div>
            </div>
            <div className='contact_wrapper' >
                <div className="contact_me">
                    <h1>
                        Contact
                    </h1>
                    <p className='para' >
                        I'm seeking out opportunities to collaborate with companies/agencies/individuals.
                        I want to bring my collective experience to the table where we can work together
                        to solve real bussiness-problems in a way that optimizes all of our respective
                        experience and knowledge.
                    </p>
                    <p className='para'>
                        Feel free to reach out through any platforms below:
                    </p>
                    <button className='mail' onClick={() =>  navigator.clipboard.writeText('hello@harshilgambhir.com')}>
                        <span>hello@harshilgambhir.com</span>
                    </button>
                    <a className='social' href="https://www.instagram.com/gambhir_harshil/">
                        <span className='red'>
                            Instagram
                        </span>
                    </a>
                    <a className='social' href="https://www.linkedin.com/in/harshil-gambhir-266851196/">
                        <span className='red'>
                            Linkedin
                        </span>
                    </a>
                </div>
                <div className="margin">
                </div>
            </div>
        </div>
    )
}

export default ContactScreen;
