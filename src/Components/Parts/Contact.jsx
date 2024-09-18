import React from 'react';

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

import ytl from '../../SourceFiles/Logos/Youtube.png'
import gitl from '../../SourceFiles/Logos/Github.png'
import el from '../../SourceFiles/Logos/Email.png'
import li from '../../SourceFiles/Logos/Linkedin.png'

import '../../App.css';
import '../Section.css';



function ContactSection() {
    return(
    <div> 
      <div id="contact">
        <div>If you want to see more or you'd like to contact me, use the links below:</div>
        <div id="contactlinks">
          <a class="contactlink" target="_blank" href="https://youtube.com/@Doctorblobs">
              <img src={ytl} alt="The Youtube logo" /> 
              Youtube
          </a>

          <a class="contactlink" target="_blank" href="https://github.com/Doctorblobs"> 
            <img src={gitl} alt="The GitHub logo"/> 
            GitHub
          </a>

          <a class="contactlink" target="_blank" href="https://www.linkedin.com/in/jetze-hettema-6b1551293/"> 
            <img src={li} alt="THe LinkedIn symbol" />
            Linkedin
          </a>

          <a class="contactlink" target="_blank" href="mailto:doctorblobsvr@gmail.com"> 
            <img src={el} alt="An at symbol" />
            E-Mail
          </a>
        </div>
      </div>
    </div>
    )
}

export default ContactSection