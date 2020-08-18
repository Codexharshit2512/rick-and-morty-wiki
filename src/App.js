import React from "react";
import MainLanding from "./components/MainLanding/MainLanding";
import SeasonContainer from "./components/seasons/SeasonContainer";
import MainCarousel from "./components/carousel/MainCarousel";
import CardSection from "./components/Characters/CardSection";

function App() {
  return (
    <>
      <MainLanding />
      <CardSection />
      <SeasonContainer />
      <MainCarousel />
    </>
  );
}

export default App;
