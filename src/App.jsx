import "./App.css";
import FoodPage_section from "./components/FoodPage_section";
import GeneralInformation_Section from "./components/GeneralInformation_Section";
import MainSection from "./components/MainSection";
import ShoppingCart_Section from "./components/shoppingCart_Section";


function App() {


  return (
    <>
      <div className="app">
        <MainSection />
        <GeneralInformation_Section />
        <ShoppingCart_Section />
        <FoodPage_section />
      </div>
    </>
  );
}

export default App;
