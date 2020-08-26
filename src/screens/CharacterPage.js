import React, { useState } from "react";
import instance from "../config/configuration";
import Card from "../components/Characters/Card";
import PageBar from "../components/CharacterPage/PageBar";

const CharacterPage = (props) => {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  React.useEffect(() => {
    instance
      .get(`character/?page=${currentPage}`)
      .then((Response) => {
        setCharacters(Response.data.results);
        setTotalPages(Response.data.info.pages);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage]);

  const setPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <h4
        className="display-4 text-center mt-3"
        style={{ color: "floralwhite" }}
      >
        Characters
      </h4>
      <div className="row card-spacing">
        {characters.map((character) => {
          const { name, image, species, id } = character;
          return (
            <div className="col-sm col-lg-4 col-md-2" key={id}>
              <Card title={name} image={image} description={species} />
            </div>
          );
        })}
      </div>
      <PageBar pageNo={totalPages} setPage={setPage} />
    </div>
  );
};

export default CharacterPage;
