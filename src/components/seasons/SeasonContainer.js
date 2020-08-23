import React from "react";
import { seasons } from "./seasons";
import Season from "./Season";

const SeasonContainer = () => {
  return (
    <div className="season-container">
      <div className="season-heading text-center">
        <h1 className="display-4 text-center" style={{ color: "floralwhite" }}>
          Seasons
        </h1>
      </div>
      <div className="season-item-container row justify-content-center">
        {seasons.map((season, index) => (
          <Season season={season} key={season.id} />
        ))}
      </div>
    </div>
  );
};

export default SeasonContainer;
