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

        <button className='hero-button'><FontAwesomeIcon icon={solid('caret-right')} style={{color: 'white', fontSize: '78px'}} /></button>

        <div className='light x1'></div>
        <div className='light x2'></div>
        <div className='light x3'></div>
        <div className='light x4'></div>
        <div className='light x5'></div>
        <div className='light x6'></div>
        <div className='light x7'></div>
        <div className='light x8'></div>
        <div className='light x9'></div>

    </div>
    </>

  )
}

export default Hero