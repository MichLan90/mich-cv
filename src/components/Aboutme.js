import React, {useState} from 'react';
import selfie from '../assets/selfie.jpg'
import certificate from '../assets/certificate.png'

function Aboutme() {
  return (

    <>
    <div className='box-wrapper'>
        <h1>About me</h1>
        <div className='content'>
          <div className="selfie-div">
            <img src={selfie} alt='selfie' style={{width: '300px', textAlign: 'center'}}/>
          </div>
          <div className="text-div"> 
            I am a developer and I am passionate about my job. 
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
            I am a Junior developer that is looking for the right kind of company, willing to invest a little time on me to later benefit of the results.
          </div>

          <p>You can read about my skills on my school certificate supplement here.</p>
          <a href="https://online.flippingbook.com/view/735280958/" target='_blank'>
            <img src={certificate} className='certificate'/>
          </a>
        </div>
    </div>
    </>

  )
}

export default Aboutme