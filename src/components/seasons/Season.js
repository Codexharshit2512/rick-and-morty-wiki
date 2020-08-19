import React from "react";

const Season = (props) => (
  <div className="col-md-2 col-12">
    <div class="card bg-dark text-white season-item">
      <img class="card-img" src="../../images/bg.png" alt="" />
      <div class="card-img-overlay">
      <h4 class="card-title">{props.season}</h4>
      </div>
    </div>
  </div>
);

export default Season;
