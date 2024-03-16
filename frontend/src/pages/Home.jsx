import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import About from "../components/About.jsx";
import Qualities from "../components/Qualities.jsx";
import Menu from "../components/Menu.jsx";
import WhoAreWe from "../components/WhoAreWe.jsx";
import Team from "../components/Team.jsx";
import Footer from "../components/Footer.jsx";
import Reservation from "../components/Reservation.jsx";


const Home = () => {
  return (
    <>
    
      <HeroSection/>
      <Qualities/>
      <Menu/>
      <WhoAreWe/>
      <Team/>
      <Reservation/>
      <About/>
      <Footer/>
    </>
  );
};

export default Home;
