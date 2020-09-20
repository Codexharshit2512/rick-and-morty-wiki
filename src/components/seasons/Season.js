import React from "react";
import { Link } from "react-router-dom";

const Season = ({ season }) => (
  <Link to={`/seasons/${season.id}`}>
    <div className="col-md-3 col-12 season-item">
      <div className="card text-white">
        <img
          className="card-img"
          src={season.image}
          style={{ height: "100%" }}
          alt={`rick and morty ${season.title}`}
        />
        <div className="card-body">
          <h4 className="card-title text-center" style={{ color: "white" }}>
            {season.title}
          </h4>
        </div>
      </div>
    </div>
  </Link>
);

export default Season;
