import React from "react";
import instance from "../config/configuration";

const CharacterPage = (props) => {
  React.useEffect(() => {
    instance
      .get("episode")
      .then((Response) => {
        console.log(Response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <h1>Hello</h1>;
};

export default CharacterPage;
