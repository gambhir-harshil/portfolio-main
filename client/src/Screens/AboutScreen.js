import React from 'react';
import { Link } from 'react-router-dom';

import './AboutScreen.css'

const AboutScreen = () => {
    return (
        <div className='about'>
             <div className="about_nav">
                <Link to='/'>
                    <div className="back">
                            <span>back</span>
                    </div>
                </Link>
            </div>
            <div className="about_header">
                <div className="about_heading_wrapper">
                    <h1>I'm a Frontend Web Developer</h1>
                </div>
            </div>
            <div className='about_wrapper' >
                <div className="about_me">
                    <h1>
                        About
                    </h1>
                    <p className='p_heading'>
                        Hi, I'm Harshil. I'm a frontend Web Developer with a little experience of designing.
                    </p>
                    <p className='para' >
                        I've been working on ReactJS for the past year and have created quite few projects on it.
                        Learning and creating everyday. I'm looking for more experience I can get collaborating with 
                        companies and freelancing. 
                    </p>
                    <p className='para'>
                        I don't like to define myself by the work I've done. I define myself by the work I want to do.
                        Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, 
                        and do interesting things that matter.
                    </p>
                    <p className='para'>
                        Fueled by high energy levels and boundless enthusiasm, I'm easily inspired and more than willing to 
                        follow my fascinations wherever they take me. I'm passionate, expressive, multi-talented spirit with 
                        a natural ability to entertain and inspire. I'm never satisfied to just come up with ideas. Instead 
                        I have an almost impulsive need to act on them.
                    </p>
                    <p className="para">
                        You can read more about me, my skills and much more in the PDF attached below:
                    </p>
                </div>
                <div className="margin">
                </div>
            </div>
        </div>
    )
}

export default AboutScreen;
