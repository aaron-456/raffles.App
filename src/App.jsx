// import { useState } from "react";
import "./App.css";
import GeneralInformation_Section from "./components/GeneralInformation_Section";
import MainSection from "./components/MainSection";


function App() {


  return (
    <>
      <div className="app">
        <MainSection />
        <GeneralInformation_Section />
      </div>
    </>
  );
}

export default App;
