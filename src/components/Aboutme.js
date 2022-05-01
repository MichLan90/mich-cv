import React, {useState} from 'react';
import selfie from '../assets/selfie.jpg'
import certificate from '../assets/certificate.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function Aboutme() {
  return (

    <>
    <div className='box-wrapper'>
        <h1>About me</h1>
        <div className='content'>
          <div className="selfie-div">
            <img src={selfie} alt='selfie' style={{width: '300px', textAlign: 'center', margin: '5px'}}/>
          </div>
          <div className="text-div"> 
            I am curious mind and I am passionate about my job. 
            I never get tired of exploring new solutions and learning new technologies that can offer the best user experience. <br/>
            Now that you read the big words, I am going to get more personal because I want you to understand what kind of
            person I am and to do that I need to bore you with some life details (I will keep it short, promise!).
            <br/><br/>
            Class '90, grew up playing on the Amiga and exploring basic frontend at a young age 
            (remember blogs time? Get nostalgic with me). 
            Born and raised in Milan (Italy), where I studied foreign languages at the University. Since I started working I have been bumping from one 
            job to another but the reason was always the same: I was getting bored. I felt like I had learned everything I needed to learn and was just repeating 
            the same routine. Got so bored at one point, that even my little town felt like routine... so I moved to Sweden. 
            <br/><br/>
            The feeling of boredom is nowadays forgotten, mostly thanks to my career (but my son plays his part.) 
            And this is why I love being a developer: it is NEVER boring. I am hungry for knowledge, I find challenges exciting rather than scarying
            and I always come up with creative solutions. 
            <br/><br/>

            <h2>Work experience</h2>

            I am a Junior developer that is looking for the right kind of company, willing to invest a little time on me to later benefit of the results.
            <p>You can read about my skills on my school certificate supplement here.</p>
            <a href="https://online.flippingbook.com/view/735280958/" target='_blank'>
              <img src={certificate} className='certificate'/>
            </a><br/><br />
            During my trainee period which was included in my education program, I had the change to test my skills in a workplace. I have been working 
            as a backend developer, helping implementing existing projects or starting new ones. I have worked mostly with:
            <ul>
              <li>CMS (Wp): Wordpress and personalized gutenberg blocks. Creating customizable websites that allow the client 
                to update or change the content from the admin panel (PHP, HTML, CSS, Javscript)</li>
              <li>Integrations on existing websites via REST APIs (PHP, Javascript)</li>
              <li>Hosting and server management (cPanel)</li>
            </ul>

          </div>

          
        </div>
    </div>
    </>

  )
}

export default Aboutme