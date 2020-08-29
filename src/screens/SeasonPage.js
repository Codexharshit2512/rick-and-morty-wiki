import React, { useEffect, useState } from "react";
import instance from "../config/configuration";
import { seasons } from "../components/seasons/seasons.js";
import Episode from "../components/episodePage/Episode.js";
import Loader from '../components/loader/Loader';
import { useParams } from "react-router-dom";

function SeasonPage(props) {
  let [epList, setEpList] = useState([]);
  let [isLoading,setLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    const epArray = seasons.filter((season) => season.id === id)[0].episodes;
    setLoading(true);
    instance
      .get(`episode/${epArray}`)
      .then((res) => {
        setLoading(false);
        setEpList(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="season-wrapper container">
      <h4
        className="display-4 text-center mt-3"
        style={{ color: "floralwhite" }}
      >
        Episodes
      </h4>
      {isLoading ?
       <Loader /> :
       
      (<div className="episode-list">
        <ul className="list-unstyled">
          {epList.map((episode) => (
            <Episode episode={episode} key={episode.id} />
          ))}
        </ul>
      </div>)}
    </div>
  );
}

export default SeasonPage;
