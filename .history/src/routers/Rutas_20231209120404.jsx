import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { Inicio } from "../components/Inicio";
import { Contacto } from "../components/Contacto";
import { Nosotros } from "../components/Nosotros";
import { Productos } from "../components/Productos";
import { Servicios } from "../components/Servicios";
import { Error } from "../components/Error"; 
export const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/porfolio" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/conocimientos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
        
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
