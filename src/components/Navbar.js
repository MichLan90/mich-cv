import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function Navbar() {

  const [click, setClick] = useState(false);
 /*  const handleClick = () => setClick(!click); */

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                  <h3><FontAwesomeIcon icon={solid('headset')} style={{color: 'white', fontSize: '32px', paddingTop:'18px'}}/></h3>
                </Link>

                 <ul className={click ? "nav-menu active" : "nav-menu"}>

                   <li className="link-text">
                    <Link to="aboutme" onClick={() => setClick(!click)}>
                      about me
                    </Link>
                   </li>

                   <li className="link-text">
                    <Link to="skills" onClick={() => setClick(!click)}>
                      skills
                    </Link>
                   </li>

                   <li className="link-text">
                    <Link to="contactme" onClick={() => setClick(!click)}>
                      contact me
                    </Link>
                   </li>

                </ul>

                <div className="nav-icon" onClick={() => setClick(!click)}>
                  <FontAwesomeIcon icon={click ? solid('times') : solid('bars')}   style={{color: 'white'}} />
                </div>

            </div>
        </nav>
    </>
  )
}

export default Navbar