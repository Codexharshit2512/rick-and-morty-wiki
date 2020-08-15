import React from 'react';
import {seasons} from '../../config/seasons';

const SeasonContainer = () => {

    return(
     <React.Fragment>
        <div className="season-container">
            <h1 className="display-4 text-center" style={{color:'floralwhite'}}>Seasons</h1>
            <div className="season-item-container row justify-content-center align-items-center">
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
        </div>
     </React.Fragment>
    )

}

export default SeasonContainer;