import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import character from "./character";

const CardSection = (props) => {
  let history = useHistory();

  return (
    <div className="card-section container">
      <h1
        className="display-4 text-center"
        style={{ color: "white", marginTop: 20 }}
      >
        Starring
      </h1>
      <div className="char-nav-link">
        <div
          className="icon-container"
          onClick={() => history.push("/characters")}
        >
          <FontAwesomeIcon icon={faLongArrowAltRight} />
          <div className="icon-bottom-border"></div>
        </div>
      </div>
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
};

export default CardSection;
