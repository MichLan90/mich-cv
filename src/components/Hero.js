import React from 'react';
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

    </div>
    </>

  )
}

export default Hero