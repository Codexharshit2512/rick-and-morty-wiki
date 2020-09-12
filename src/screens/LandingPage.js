import React, { useState, useEffect } from "react";
import MainLanding from "../components/MainLanding/MainLanding";
import CardSection from "../components/Characters/CardSection";
import SeasonContainer from "../components/seasons/SeasonContainer";
import MainCarousel from "../components/carousel/MainCarousel";
import Hr from "../components/Hr";
import Loader from "../components/loader/Loader";
import Footer from "../components/Footer/Footer";

const LandingPage = () => {
  let [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <MainLanding />
          <Hr />
          <CardSection />
          <Hr />
          <SeasonContainer />
          {/* <Hr /> */}
          <MainCarousel />
          {/* <Hr />
    <DevSection /> */}
          <Hr />
          <Footer />
        </>
      )}
    </>
  );
};

export default LandingPage;
