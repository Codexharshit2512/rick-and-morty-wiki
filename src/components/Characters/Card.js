import React from "react";

const Card = (props) => (
  <div className="card">
    <img className="card-img-top" src={props.image} alt="" />
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text" style={{textAlign:'left'}}>{props.description}</p>
    </div>
  </div>
);

export default Card;
