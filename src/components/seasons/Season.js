import React from "react";

const Season = (props) => (
  <div className="col-md-3 col-12 season-item">
    <div class="card bg-dark text-white">
      <img class="card-img" src="../../images/bg.png" alt="" />
      <div class="card-img-overlay">
       <h4 class="card-title text-center">{props.season}</h4>
      </div>
    </div>
  </div>
);

export default Season;
