// import { useState } from "react";
import "./App.css";
import FoodPage_section from "./components/FoodPage_section";
import GeneralInformation_Section from "./components/GeneralInformation_Section";
import MainSection from "./components/MainSection";
import Reference_section from "./components/reference_section";
import ShoppingCart_Section from "./components/shoppingCart_Section";
import { useBoolean } from "./context/MiContextoProvider";



function App() {
  const { isBoolean } = useBoolean();
  return (
    <>
      <div className="app">
        {
          !isBoolean ?
            <>
              <MainSection />
              <GeneralInformation_Section />
              <ShoppingCart_Section />
              <FoodPage_section />
            </> 
            :
            <div>
              <Reference_section />  
            </div>
        }
      </div>
    </>
  );
}

export default App;
