import React from 'react';
import bgVideo from '../SourceFiles/Videos/SCF.mp4'
import Typewriter from 'typewriter-effect';
import { MobileOnlyView, BrowserView } from "react-device-detect";

import '../App.css'
import './Section.css';

new Typewriter('#typewriter', {
  strings: ['Hello', 'World'],
  autoStart: true,
  cursor: '',
});

function HomeSection() {
    return(
    <div className='video-container'>
      
      <video autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" autoPlay muted />
      </video>
      <MobileOnlyView>
        <div className='animatedText'>
          <Typewriter className='animatedText'
            onInit={(typewriter) => {
                                      typewriter.typeString('<p>Thanks for Visiting this site!<p>')
                                      .pauseFor(1500)
                                      .deleteAll()
                                      .start();
                                      typewriter.typeString('<p>By the way this site is best viewed in a desktop browser.<p>') 
                                      .pauseFor(1500)
                                      .deleteAll()
                                      typewriter.typeString('<p>This is my Portfolio, Have a Look!<p>') 
                                      .callFunction(state => {
                                        state.elements.cursor.setAttribute('hidden', 'hidden');
                                        typewriter.stop();
                                      })
                                      }}/>
      </div>  
      </MobileOnlyView>
      <BrowserView>
      <div className='animatedText'>
          <Typewriter className='animatedText'
            onInit={(typewriter) => {
                                      typewriter.typeString('<p>Thanks for Visiting this site!<p>')
                                      .pauseFor(1500)
                                      .deleteAll()
                                      .start();
                                      typewriter.typeString('<p>This is my Portfolio, Have a Look!<p>') 
                                      .callFunction(state => {
                                        state.elements.cursor.setAttribute('hidden', 'hidden');
                                        typewriter.stop();
                                      })
                                      }}/>
      </div>
      </BrowserView>

    </div>
    )
}

export default HomeSection