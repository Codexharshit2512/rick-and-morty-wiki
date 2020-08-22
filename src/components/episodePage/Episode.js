import React from 'react';

const Episode = ({episode}) => (
    <li className="episode">
        <div className="episode-num"><h4>{episode.episode}</h4></div>
        <div className="episode-details">
            <div className="ep-name">{episode.name}</div>
            <div className="ep-date" style={{fontSize:13,color:'grey'}}>{episode.air_date}</div>
        </div>
        <div className="redirect-link">
            <a href="https://www.netflix.com/"><i className="fas fa-arrow-right"></i></a>
        </div>
   </li>
);

export default Episode;

