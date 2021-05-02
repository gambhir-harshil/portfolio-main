import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 800) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll', null);
        };
    });

    const scroll = () => {
        window.scrollTo({
            top:1000,
            behavior: 'smooth'
        });
    }

    return (
        <nav className={`navbar ${show && 'navbar_black'}`}>
            <div className="wrapper">
                <div className="container">
                    <div className="logo">HG</div>
                    <div className="list_container">
                        <div className={`list_item ${show && 'list_item_black'}`}>
                            <p onClick={scroll} >Portfolio</p>
                        </div>
                        <div className={`list_item ${show && 'list_item_black'}`}>
                            <Link to='/about'>About</Link>
                        </div>
                        <div className={`list_item ${show && 'list_item_black'}`}>
                            <a href=" ">Resume</a>
                        </div>
                        <div className={`list_item ${show && 'list_item_black'}`}>
                            <Link to='/contact'>Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
