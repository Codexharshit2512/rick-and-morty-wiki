import React from "react";
import TitleContainer from "./TitleContainer";
import HeadingContainer from "./HeadingContainer";
import SeasonContainer from "./SeasonContainer"

const MainLanding = () => (
  <React.Fragment>
    <div className="main-landing">
      <TitleContainer />
      <HeadingContainer />
    </div>
    <div className="main-season">
      <SeasonContainer />
    </div>
  </React.Fragment>
);

export default MainLanding;
