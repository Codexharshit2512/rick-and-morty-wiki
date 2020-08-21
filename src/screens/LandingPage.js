import React from "react";
import MainLanding from "../components/MainLanding/MainLanding";
import CardSection from "../components/Characters/CardSection";
import SeasonContainer from "../components/seasons/SeasonContainer";
import MainCarousel from "../components/carousel/MainCarousel";
import Hr from "../components/Hr";

const LandingPage = () => (
  <>
    <MainLanding />
    <Hr />
    <CardSection />
    <Hr />
    <SeasonContainer />
    <Hr />
    <MainCarousel />
  </>
);

export default LandingPage;
