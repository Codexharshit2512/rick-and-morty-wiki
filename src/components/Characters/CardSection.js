import React from "react";
import Card from "./Card";
import character from "./character";

const CardSection = () => (
  <div className="container">
    <h1 className="display-4 text-center" style={{ color: "black" }}>
      Characters
    </h1>
    <div className="characters">
      <div className="row">
        {character.map((char) => (
          <div className="col-sm">
            <Card
              title={char.name}
              description={char.description}
              image={char.image}
              key={char.name}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default CardSection;
