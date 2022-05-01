import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import Typewriter from 'typewriter-effect';

function Contactme() {
  return (

    <>
    <div className='box-wrapper'>
        <h1>Contact me</h1>
        <div className='content'>
          <div className='icons-container'>
            <a href='https://www.linkedin.com/in/michelle-lanaro-83b61568/' target='_blank'>
              <FontAwesomeIcon icon={brands('linkedin')} className='icons'/>
            </a>
            <a href='mailto:michelle.lanaro90@gmail.com' target='_blank'>
              <FontAwesomeIcon icon={solid('envelope')} className='icons'/>
            </a>
            <a href='https://github.com/MichLan90?tab=repositories' target='_blank'>
              <FontAwesomeIcon icon={brands('github')} className='icons'/>
            </a>
          </div> 
        <p style={{textAlign: 'center'}}>
        References available upon request
        </p>
        </div> 
    </div>
    <h1 className='contactme-quote'>      
            <Typewriter
                options={{
                    strings: ['Farewell my dear recruiter or friend. Send me a word and this might be the beginning of something new.'],
                    autoStart: true,
                    loop: false,     
                    pauseFor: 2000000000,     
                }}
            /> 
    </h1>
    </>

  )
}

export default Contactme