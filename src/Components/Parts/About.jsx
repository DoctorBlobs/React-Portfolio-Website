import React from 'react';
import bgVideo from '../../SourceFiles/Videos/ON.mov'
import noodle from '../../SourceFiles/Gifs/Noodle.gif'

import '../../App.css';
import '../Section.css';

function AboutSection() {
    return(
    <div className='about'>
      <div className='text-video-container'>
      {/* <div className='backdrop-blur' /> */}
      <video className='textvid' autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" autoPlay muted />
      </video>
    
      <div class="container-intro w-about-container">
        <img src={noodle} alt="A cool Gif" class="aboutgif"/>
          <h3 className='abouttext'>
              My name is Jetze Hettema,
              I'm a student who studies coding and game development.
              <br></br>
              <br></br>
              I've used Blender, Unity and Godot and have programmed in C#, C++, Python, React and GDScript 
          </h3>
      </div>
      </div>

    </div>
    )
}

export default AboutSection