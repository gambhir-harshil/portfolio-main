import React, { useState } from 'react';
import './ScrollButton.css';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        }
        else if (scrolled <= 300){
            setVisible(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible)

    return (
        <div className='scrollbutton'>
            <button className='btn' onClick={scrollTop} style={{display: visible ? 'inline' : 'none'}} >
                <ExpandLessIcon/>
            </button>
        </div>
    )
}

export default ScrollButton;
