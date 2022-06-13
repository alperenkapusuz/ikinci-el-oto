import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navi from "./components/Navbar/Navi";
import FilterSection from "./components/MainMenu/FilterSection/FilterSection";
import CategorySection from "./components/MainMenu/CategorySection/CategorySection";
import AutoCard from "./components/MainMenu/AutoCard/AutoCard";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navi />
        <CategorySection/>
        <FilterSection/>
        <AutoCard/>
        <Routes>
          <Route path="/detail"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
