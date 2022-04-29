import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function Navbar() {
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                  <h3><FontAwesomeIcon icon={solid('headset')} style={{color: 'white', fontSize: '28px'}}/></h3>
                </Link>
                <Link to="aboutme" className="link-text">
                  <h3>about me</h3>
                </Link>
                <Link to="projects" className="link-text">
                  <h3>projects</h3>
                </Link>
                <Link to="contactme" className="link-text">
                  <h3>contact</h3>
                </Link>
                <div className='menu-icon'>
                    
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar