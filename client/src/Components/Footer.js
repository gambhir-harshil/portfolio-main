import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer_container">
                <h3>Let's make something great!</h3>
                <div className="icon_row">
                    <a className='link' href="https://github.com/gambhir-harshil"><i className="fab fa-github icon"></i></a>
                    <a className='link' href="https://www.linkedin.com/in/harshil-gambhir-266851196/"><i className="fab fa-linkedin icon"></i></a>
                    <a className='link' href="https://www.instagram.com/gambhir_harshil/"><i className="fab fa-instagram icon"></i></a>
                </div>
                <p>Copyright © Harshil Gambhir.</p>
            </div>
        </div>
    )
}

export default Footer;
