import React,{useState,useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navi from "./components/Navbar/Navi";
// import FilterSection from "./components/MainMenu/FilterSection/FilterSection";
// import CategorySection from "./components/MainMenu/CategorySection/CategorySection";
// import AutoCard from "./components/MainMenu/AutoCard/AutoCard";
import DUMMY_AUTOS from "./Data/Data"
import AutoList from "./components/MainMenu/AutoList/AutoList";

const App = () => {
  const [autos, setAutos] = useState([]) 
  
  useEffect(() => {
    getItem();
  }, []);

  const getItem = () => {
    const localData = localStorage.getItem("data") ?? [];
    if(localData.length===0){
      localData.push(...DUMMY_AUTOS)
      setAutos(localData);
    }else{
      setAutos(JSON.parse(localData));
    } 
  };

  return (
    <div>
      <BrowserRouter>
        <Navi />
        {/* <CategorySection/>
        <FilterSection/>
        <AutoCard/> */}
        <Routes>
          <Route path="/" element={<AutoList items={autos}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
