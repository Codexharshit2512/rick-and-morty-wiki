import React from "react";

const Card = (props) => (
  <div class="card">
    <img class="card-img-top" src={props.image} alt="" />
    <div class="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
    </div>
  </div>
);

export default Card;
