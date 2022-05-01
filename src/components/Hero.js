import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import './animated-background-style.css';
import Typewriter from './Typewriter';


function Hero() {
  return (

    <>
    <div className='hero'>
       

        <div className='hero-container'>
            <Typewriter/>       
        </div>

        <button className='hero-button'>
            <Link to='aboutme'>
                <FontAwesomeIcon icon={solid('caret-right')} style={{color: 'white', fontSize: '78px'}} /> 
            </Link>
        </button> 

    </div>
    </>

  )
}

export default Hero