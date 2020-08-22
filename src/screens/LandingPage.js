import React from "react";
import MainLanding from "../components/MainLanding/MainLanding";
import CardSection from "../components/Characters/CardSection";
import SeasonContainer from "../components/seasons/SeasonContainer";
import MainCarousel from "../components/carousel/MainCarousel";
import Hr from "../components/Hr";
import DevSection from "../components/DeveloperSection/DevSection";

const LandingPage = () => (
  <>
    <MainLanding />
    <Hr />
    <CardSection />
    <Hr />
    <SeasonContainer />
    <Hr />
    <MainCarousel />
    <Hr />
    <DevSection />
  </>
);

export default LandingPage;
