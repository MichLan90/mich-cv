import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import certificate from '../assets/certificate.png'



function Skills() {
  return (

    <>
    <div className='box-wrapper'>
        <h1>Skills</h1>
        <div className='content'>
          <div className='skills-icons'>
            <div className='single-icon'>
              <FontAwesomeIcon icon={brands('html5')} className='icons'/>
              <p>HTML5</p>
            </div>
            <div className='single-icon'>
              <FontAwesomeIcon icon={brands('css3')} className='icons'/>
              <p>CSS3</p>
            </div>
            <div className='single-icon'>
              <FontAwesomeIcon icon={brands('js-square')} className='icons'/>
              <p>Javascript</p>
            </div>
            <div className='single-icon'>
              <FontAwesomeIcon icon={brands('wordpress')} className='icons'/>
              <p>Wordpress</p>
            </div>
            <div className='single-icon'>
              <FontAwesomeIcon icon={brands('node')} className='icons'/>
              <p>Node.js</p>
            </div>
            <div className='single-icon'>
              <FontAwesomeIcon icon={brands('react')} className='icons'/>
              <p>React</p>
            </div>
            <div className='single-icon'>
              <FontAwesomeIcon icon={brands('php')} className='icons'/>
              <p>PHP</p>
            </div>
            <div className='single-icon'>
              <FontAwesomeIcon icon={brands('github')} className='icons'/>
              <p>GitHub</p>
            </div>
            <div className='single-icon'>
              <FontAwesomeIcon icon={brands('cpanel')} className='icons'/>
              <p>cPanel</p>
            </div>
          </div>  

          <div className='skills-text'>
            I am a Junior developer that is looking for the right kind of company, willing to invest a little time on me to later benefit of the results.
              <p>You can read about my skills on my school certificate supplement here.</p>
              <a href="https://online.flippingbook.com/view/735280958/" target='_blank'>
                <img src={certificate} className='certificate'/>
              </a><br/><br />
              During my trainee period which was included in my education program, I had the chance to test my skills in a workplace. I have been working 
              as a backend developer, helping implementing existing projects or starting new ones. I have worked mostly with:
              <ul>
                <li>CMS (Wp): Wordpress and personalized gutenberg blocks. Creating customizable websites that allow the client 
                  to update or change the content from the admin panel (PHP, HTML, CSS, Javascript)</li>
                <li>Third part integrations on existing websites via REST APIs (PHP, Javascript)</li>
                <li>Hosting and server management (cPanel, MySQL)</li>
                <li>Speed, SEO and functionality improvements on old projects</li>
                <li>Use of platforms such as Atlassians, Jira and working in sprints and SCRUM method</li>
              </ul>

          </div> 

        </div>
    </div>
    </>

  )
}

export default Skills