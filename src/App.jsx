import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import{Container} from "react-bootstrap";
import  { useState } from "react";
import "./_app.scss"
const App=()=>{
  const[sidebar,togglesidebar]=useState(false);
  const handleToggleSidebar=()=> togglesidebar(value=>!value)
  return (
    <>
    <Header handleToggleSidebar={handleToggleSidebar}/>
    <div className="app_container border border-info">
      <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
      <div fluid className="app_main border border-warning">
        <HomeScreen/>
      </div>
    </div>
    </>
  
  )
}


export default App;

