import { Routes, Route, BrowserRouter } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Contacto from "../pages/Contacto";
import Nosotros from "../pages/Nosotros";
import Productos from "../pages/Productos";
import Servicios from "../pages/Servicios";

import NavHeader from "../components/NavHeader";
import Footer from "../components/Footer";
export const Rutas = () => {
  return (
    <BrowserRouter>
      <NavHeader />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};
