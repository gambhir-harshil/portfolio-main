import React from 'react';
import './HomeScreen.css';

import Header from '../Components/Header';
import Portfolio from '../Components/Portfolio';
import Footer from '../Components/Footer';
import ScrollButton from '../Components/ScrollButton';
import Navbar from '../Components/Navbar';

const HomeScreen = () => {
    return (
        <div className='homescreen'>
            <Navbar/>
            <Header/>
            <Portfolio/>
            <Footer/>
            <ScrollButton/>
        </div>
    )
}

export default HomeScreen;
