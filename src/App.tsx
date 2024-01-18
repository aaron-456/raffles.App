import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import FoodPage_section from "./components/FoodPage_section";
import GeneralInformation_Section from "./components/GeneralInformation_Section";
import MainSection from "./components/MainSection";
import Reference_section from "./components/reference_section";
import ShoppingCart_Section from "./components/ShoppingCart_Section";
import { useBoolean } from "./context/MiContextoProvider";

function App() {
  const { isBoolean } = useBoolean();

  return (
    <div className="app">
      <Routes>
        <Route path="/reference" element={<Reference_section />} />
        <Route
          path="/"
          element={
            !isBoolean ? (
              <>
                <MainSection />
                <GeneralInformation_Section />
                <ShoppingCart_Section />
                <FoodPage_section />
              </>
            ) : (
              <div>
                <Reference_section />
              </div>
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
