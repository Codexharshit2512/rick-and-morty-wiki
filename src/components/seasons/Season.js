import React from 'react';

const Season=(props) => (
    <div className="season-item col-md-2">
        <div className="front">
            <h3>{props.season}</h3>    
        </div>
        <div className="back">
            <a href="#">View</a>
        </div>
    </div>
)

export default Season;