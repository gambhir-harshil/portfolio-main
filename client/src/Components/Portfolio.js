import React, {useEffect, useRef} from 'react';
import './Portfolio.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'

import netflix from '../Images/netflix.png';
import spotify from '../Images/spotify.png';
import ecom from '../Images/ecom.png';
import chatterbox from '../Images/chatterbox.png';
import vivid from '../Images/vivid.png';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
    
    const divref = useRef(null);


    useEffect(() => {
        gsap.to("#wrapper1", {
          opacity:1,  
          duration:1.2,
          scrollTrigger: {
            trigger: "#wrapper1",
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
          }
        });
        gsap.to(".wrapper2", {
            opacity:1,  
            duration:1.2,
            scrollTrigger: {
              trigger: ".wrapper2",
              start: 'top center+=100',
              toggleActions: 'play none none reverse',
            }
          });
        gsap.to(".wrapper3", {
            opacity:1,  
            duration:1.2,
            scrollTrigger: {
              trigger: ".wrapper3",
              start: 'top center+=100',
              toggleActions: 'play none none reverse',
            }
          });
        gsap.to(".wrapper4", {
            opacity:1,  
            duration:1.2,
            scrollTrigger: {
              trigger: ".wrapper4",
              start: 'top center+=100',
              toggleActions: 'play none none reverse',
            }
          });
        gsap.to(".wrapper5", {
            opacity:1,  
            duration:1.2,
            scrollTrigger: {
              trigger: ".wrapper5",
              start: 'top center+=100',
              toggleActions: 'play none none reverse',
            }
          });
      });

    return (
        <div className='portfolio'>
            <p className='heading'>PROJECTS</p>
            <div id="wrapper1" ref={divref} >
                <div className="below"></div>
                <div className="above"></div>
                <img className='netflix_img' src={netflix} alt='netflix'/>
                <div className="text_cont">
                   <h2>A Dynamic Netflix Clone!</h2>
                   <p>A netflix clone made with the help of TMDB api based on ReactJS.</p>
                   <div className="btn_wrapper">
                        <a href="https://drunk-duck.netlify.app/" className="action-button shadow animate netflix">Check it Out!</a>
                        <a href="https://github.com/gambhir-harshil/netflix-clone" className="action-button shadow animate github"> <i className="fab fa-github"></i> Repository</a>
                   </div>
                </div>
            </div>
            <div className="wrapper2">
                <div className="below"></div>
                <div className="above"></div>
                <img src={spotify} alt='spotify'/>
                <div className="text_cont">
                   <h2>A Dynamic Spotify Clone!</h2>
                   <p>A spotify clone made with the help of Spotify api based on ReactJS.</p>
                   <div className="btn_wrapper">
                        <a href="https://github.com/gambhir-harshil/spotify-clone" className="action-button shadow animate github"> <i className="fab fa-github"></i> Repository</a>
                   </div>
                </div>
            </div>
            <div className="wrapper3">
                <div className="below"></div>
                <div className="above"></div>
                <img src={ecom} alt='ecom'/>
                <div className="text_cont">
                   <h2>A Dynamic and Responsive Ecomm Store!</h2>
                   <p>A Fully functional E-commerce Store based on the MERN stack and Redux.</p>
                   <div className="btn_wrapper">
                        <a href="https://606fc93ef6a0e80007f569e6--sleepy-bear.netlify.app/" className="action-button shadow animate ecom">Check it Out!</a>
                        <a href="https://github.com/gambhir-harshil/E-commerce" className="action-button shadow animate github"> <i className="fab fa-github"></i> Repository</a>
                   </div>
                </div>
            </div>
            <div className="wrapper4">
                <div className="below"></div>
                <div className="above"></div>
                <img src={chatterbox} alt='chatterbox'/>
                <div className="text_cont">
                   <h2>A Real time chat application!</h2>
                   <p>A Real time chat application made with chat-engine.io and based on ReactJS.</p>
                   <div className="btn_wrapper">
                        <a href="https://606fc93ef6a0e80007f569e6--sleepy-bear.netlify.app/" className="action-button shadow animate chatterbox">Check it Out!</a>
                        <a href="https://github.com/gambhir-harshil/chatterbox" className="action-button shadow animate github"> <i className="fab fa-github"></i> Repository</a>
                   </div>
                </div>
            </div>
            <div className="wrapper5">
                <div className="below"></div>
                <div className="above"></div>
                <img src={vivid} alt='vivid'/>
                <div className="text_cont">
                   <h2>A Server based social media App!</h2>
                   <p>A MERN stack based social media app which posts data in real time.</p>
                   <div className="btn_wrapper">
                        <a href="https://github.com/gambhir-harshil/Vivid" className="action-button shadow animate github"> <i className="fab fa-github"></i> Repository</a>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
