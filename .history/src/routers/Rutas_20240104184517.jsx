import { Routes, Route, BrowserRouter } from "react-router-dom";
import Inicio from "../pages/Inicio";


import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
export const Rutas = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};
