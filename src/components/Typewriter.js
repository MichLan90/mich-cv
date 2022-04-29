import React, {useState} from 'react';
import './animated-background-style.css';
import Typewriter from 'typewriter-effect';

function Typewrite() {
  return (
      <div style={{textAlign: 'center'}}>
    <Typewriter
    options={{
        strings: ['Hello and thank you for dropping by.<br>Take your time too look around :)'],
        autoStart: true,
        loop: false,     
        pauseFor: 2000000000,     
    }}
    />  
    </div>
  )
}

export default Typewrite;