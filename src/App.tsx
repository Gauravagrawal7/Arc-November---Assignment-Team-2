import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";
import ShinyButton from "./components/ui/shiny-button";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Heroscreen from "./screen/Hero2.0";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter></BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
        <Route path="/home" element={<Heroscreen></Heroscreen>}></Route>
      </Routes>
    </>
  );
}

export default App;
