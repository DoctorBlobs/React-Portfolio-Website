import React from 'react';
import bgVideo from '../SourceFiles/Videos/SCF.mp4'
import Typewriter from 'typewriter-effect';

import '../App.css'
import './Section.css';

new Typewriter('#typewriter', {
  strings: ['Hello', 'World'],
  autoStart: true,
});

function HomeSection() {
    return(
    <div className='video-container'>
      
      <video autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" autoPlay muted />
      </video>
      <div className='animatedText'>
          <Typewriter className='animatedText'
            onInit={(typewriter) => {
                                      typewriter.typeString('<p>Thanks for Visiting this site!<p>')
                                      .pauseFor(2500)
                                      .deleteAll()
                                      .start();
                                      typewriter.typeString('<p>This is my Portfolio, Have a Look!<p>') 
                                      .callFunction(state => {
                                        state.elements.cursor.setAttribute('hidden', 'hidden');
                                        typewriter.stop();
                                      })
                                      }}/>
      </div>

    </div>
    )
}

export default HomeSection