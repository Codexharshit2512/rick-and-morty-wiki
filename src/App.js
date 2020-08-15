import React from "react";
import MainLanding from "./components/MainLanding/MainLanding";
import SeasonContainer from "./components/seasons/SeasonContainer";

import CardSection from "./components/Characters/CardSection";
function App() {
  return (
    <>
      <MainLanding />
      <CardSection />
      <SeasonContainer />
    </>
   )
      
}

export default App;
