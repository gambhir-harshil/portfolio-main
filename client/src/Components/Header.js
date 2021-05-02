import React from 'react';
import './Header.css';

import toon from '../Images/vector-me.png';

const Header = () => {

    const scroll = () => {
        window.scrollTo({
            top:1000,
            behavior: 'smooth'
        });
    }

    return (
        <div className='header'> 
            <div className="header_left">
                <h1>Hi, I'm <span>Harshil</span></h1>
                <p>I design and code beautifully simple things, and I love what I do.</p>
                <p>Currently based in New Delhi, pursuing my Bachelors of Computer Applications 
                    from <a href="https://vips.edu/"><b>Vivekananda Institute of Professional Studies.</b></a>
                </p>
                <button onClick={scroll} >Check out my work</button>
            </div>
            <div className='header_right'>
                <img src={toon} alt="me"/>
            </div>
        </div>
    )
}

export default Header;
