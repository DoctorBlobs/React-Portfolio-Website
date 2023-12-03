import React from 'react';

import '../../App.css';
import '../Section.css';

function MediaSection() {
    return(
    <div class="mediaContainer">
      
        <div class="w-heart-container">
          <div className='medialeft'>
          
            <img src="https://uploads-ssl.webflow.com/5b74319904a3986591585aa1/5b7add16e9f2d5a14455cfc2_tumblr_oi04zmrMkq1v5i3nmo1_250.gif" alt="" class="image" width="110" />
              
              <div>
                <h3 class="whiteText">Specialized in programmatic ad-tech with broad technical knowledge in web technologies and biddable acquisition channels with product management + solution architecture experiences</h3>
              </div>
              
          </div>
        </div>

        <div class="w-heart-container">
          <div className='mediaright'>

              <div>
                  <h3 class="whiteText">Specialized in programmatic ad-tech with broad technical knowledge in web technologies and biddable acquisition channels with product management + solution architecture experiences</h3>
              </div>
              
              <img src="https://uploads-ssl.webflow.com/5b74319904a3986591585aa1/5b7add16e9f2d5a14455cfc2_tumblr_oi04zmrMkq1v5i3nmo1_250.gif" alt="" class="image" width="110" />
          </div>
        </div>

      </div>
    )
}

export default MediaSection