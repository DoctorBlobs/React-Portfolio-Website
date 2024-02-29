import React from 'react';
import { LiteYoutubeEmbed } from 'react-lite-yt-embed';
import '../../App.css';
import '../Section.css';

function MediaSection() {
    return(
    <div class="mediaContainer">
      
          <div className='lefttext medialeft'>
            <h3 class="whiteText">Experienced in making small media projects and playing the guitar! 
                                  Also a big fan of music and listening to music. 
                                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
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