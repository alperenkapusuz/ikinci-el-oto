import React,{useState,useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navi from "./components/Navbar/Navi";
import DUMMY_AUTO from "./Data/Data"
import AutoList from "./components/MainMenu/AutoList/AutoList";
import AutoAdd from "./components/AutoAdd/AutoAdd";
import AutoDetail from "./components/AutoDetail/AutoDetail";

const App = () => {
  const [autos, setAutos] = useState([]) 

  useEffect(() => {
    getItem();
  }, []);

  const getItem = () => {
    const localData = localStorage.getItem("data") ?? [];
    if(localData.length===0){
      localData.push(...DUMMY_AUTO)
      setAutos(localData);
    }else{
      setAutos(JSON.parse(localData));
    } 
  };


  return (
    <div>
      <BrowserRouter>
        <Navi />
        <Routes>
          <Route path="/" element={<AutoList items={autos}/>}/>
          <Route path="/addAuto" element={<AutoAdd/>}/>
          <Route path="/:autoId" element={<AutoDetail items={autos}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
