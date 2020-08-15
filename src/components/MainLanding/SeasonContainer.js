import React from 'react';
import {seasons} from '../../config/seasons';

const SeasonContainer = () => {

    return(
      <div className="season-container row justify-content-center align-items-center">
          {seasons.map(season => (
              <div className="season-item col-md-5">
                 <div className="front">
                    <h3>{season}</h3>    
                 </div>
                 <div className="back">
                     <span>View</span>
                 </div>
              </div>
          ))}
      </div>
    )

}

export default SeasonContainer;