import { Routes, Route, BrowserRouter } from "react-router-dom";
import Inicio from "../components/Inicio";
import Contacto from "../components/Contacto";
import Nosotros from "../components/Nosotros";
import Productos from "../components/Productos";
import Servicios from "../components/Servicios";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
export const Rutas = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" Component={<Servicios />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};
