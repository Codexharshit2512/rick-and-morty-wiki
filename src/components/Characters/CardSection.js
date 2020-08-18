import React from "react";
import Card from "./Card";
import character from "./character";

const CardSection = () => (
  <div className="container">
    <h1
      className="display-4 text-center"
      style={{ color: "white", marginTop: 20 }}
    >
      Starring
    </h1>
    <div className="characters">
      <div className="row">
        {character.map((char) => (
          <div className="col-sm" key={char.name}>
            <Card
              title={char.name}
              description={char.description}
              image={char.image}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default CardSection;
