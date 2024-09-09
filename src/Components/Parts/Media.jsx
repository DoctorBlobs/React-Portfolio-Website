import React from 'react';
import { LiteYoutubeEmbed } from 'react-lite-yt-embed';
import '../../App.css';
import '../Section.css';

function MediaSection() {
    return(
    <div class="mediaContainer">
      
          <div className='lefttext medialeft'>
            <h3 class="whiteText">I like working on small media projects like songs, video's and games.
                                  <br></br>
                                  <br></br>
                                  Some of my interests include making my own 3D models and animations, playing the guitar, reading science fiction books and freerunning. 
                                  {/* <br></br>
                                  <br></br>
                                  If you have a certain IKEA Shark hand it over. It is mine now. */}
            </h3>
          </div>

          <div className='mediaright'>
            <div className='YoutubeVideo'>
              <LiteYoutubeEmbed playlabel="Example Video"  id={'5KakGqaptPY'}/>
            </div>
            
          </div>
        </div>

    )
}

export default MediaSection