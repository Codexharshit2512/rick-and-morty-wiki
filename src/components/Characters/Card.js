import React from "react";
import rick from "../../images/rick.jpg";

const Card = (props) => (
  <div className="card" style={{ width: "18rem" }}>
    <img src={rick} alt="" className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">Rick Sanchez</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" className="btn btn-outline-dark">
        Go somewhere
      </a>
    </div>
  </div>
);

export default Card;
