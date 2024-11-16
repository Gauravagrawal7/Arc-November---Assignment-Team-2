import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Heroscreen from "./screen/Hero2.0";
import Header from "./components/ui/Header/Header";
import Footer from "./components/ui/Footer/Footer";
import ContactUs from "./screen/ContactUs";

function App() {
  return (
    <>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
          <Route path="/home" element={<Heroscreen></Heroscreen>}></Route>
          <Route path="/contact-us" element={<ContactUs></ContactUs>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
