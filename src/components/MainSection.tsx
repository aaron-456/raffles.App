import React from "react";
import PercentageBar from "./PercentageBar";
import "./styles/mainSection.css";

const MainSection = () => {
  return (
    <section className="main__section">
      <h1 className="title__app">GRAN SORTEO</h1>
      <PercentageBar />
      <div className="raffleImg__box">
        <img src="" alt="" />
      </div>
    </section>
  );
};

export default MainSection;
