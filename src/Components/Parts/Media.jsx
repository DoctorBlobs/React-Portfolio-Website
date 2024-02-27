import React from 'react';
import { Spotify } from 'react-spotify-embed';

import '../../App.css';
import '../Section.css';

function MediaSection() {
    return(
    <div class="mediaContainer">
      
        <div class="w-heart-container">
          <div className='lefttext medialeft'>
            <h3 class="whiteText">Experienced in making small media projects and playing the guitar! 
                                  Also a big fan of music and listening to music. 
                                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            </h3>
          </div>
        </div>

        <div class="w-heart-container">
          <div className='mediaright'>

              {/* <div>
                  <h3 class="whiteText">Specialized in programmatic ad-tech with broad technical knowledge in web technologies and biddable acquisition channels with product management + solution architecture experiences</h3>
              </div> */}
              <Spotify link="https://open.spotify.com/playlist/2gF9Q3vORSYo5Tg3R2C9tF?si=9fa2ceddecde42af" className='SpotifyPlayer'/>
              {/* <img src="https://uploads-ssl.webflow.com/5b74319904a3986591585aa1/5b7add16e9f2d5a14455cfc2_tumblr_oi04zmrMkq1v5i3nmo1_250.gif" alt="" class="image" width="110" /> */}
          </div>
        </div>

      </div>
    )
}

export default MediaSection