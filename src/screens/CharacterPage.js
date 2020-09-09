import React, { useState } from "react";
import instance from "../config/configuration";
import Card from "../components/Characters/Card";
import PageBar from "../components/CharacterPage/PageBar";
import CharacterFilter from "../components/CharacterPage/CharacterFilter";
import Loader from "../components/loader/Loader";

const CharacterPage = (props) => {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(undefined);
  const [isLoading, setLoading] = useState(true);
  const [filters, setFilters] = useState([]);

  React.useEffect(() => {
    let filterStr = ``,
      current;
    if (filters.length === 0) filterStr = ``;
    else {
      filters.forEach((filter) => {
        if (filter.value) filterStr += `&${filter.type}=${filter.value}`;
      });
    }
    setLoading(true);
    if (!currentPage) current = 1;
    else current = currentPage;
    instance
      .get(`character/?page=${current}${filterStr}`)
      .then((Response) => {
        setLoading(false);
        setCharacters(Response.data.results);
        // console.log(Response.data);
        setTotalPages(Response.data.info.pages);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage, filters]);

  const setPage = (page) => {
    setCurrentPage(page);
  };

  const changeFilter = async (arr) => {
    setFilters(arr);
    setCurrentPage(1);
  };

  return (
    <div className="container">
      <h4
        className="display-4 text-center mt-3"
        style={{ color: "floralwhite" }}
      >
        Characters
      </h4>
      <CharacterFilter filters={filters} setFilters={changeFilter} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default CharacterPage;
