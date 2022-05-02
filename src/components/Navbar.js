import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function Navbar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                  <h3><FontAwesomeIcon icon={solid('headset')} style={{color: 'white', fontSize: '28px'}}/></h3>
                </Link>

                 <ul className={click ? "nav-menu active" : "nav-menu"}>

                   <li className="link-text">
                    <Link to="aboutme" onClick={handleClick}>
                      about me
                    </Link>
                   </li>

                   <li className="link-text">
                    <Link to="skills" onClick={handleClick}>
                      skills
                    </Link>
                   </li>

                   <li className="link-text">
                    <Link to="contactme" onClick={handleClick}>
                      contact me
                    </Link>
                   </li>

                </ul>

                <div className="nav-icon" onClick={handleClick}>
                  <FontAwesomeIcon icon={click ? solid('times') : solid('bars')}   style={{color: 'white'}} />
                </div>

            </div>
        </nav>
    </>
  )
}

export default Navbar