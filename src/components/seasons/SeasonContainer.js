import React from 'react';
import {seasons} from '../../config/seasons';
import Season from './Season';

const SeasonContainer = () => {

    return(
     <div className="main-season">
        <div className="season-container">
            <h1 className="display-4 text-center" style={{color:'floralwhite'}}>Seasons</h1>
            <div className="season-item-container row justify-content-center">
                {seasons.map(season => (
                    <Season season={season} key={season} />
                ))}
            </div>
        </div>
     </div>
    )

}

export default SeasonContainer;