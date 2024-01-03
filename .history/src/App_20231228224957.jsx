import "./App.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";
//import { Rutas } from "./routers/Rutas";

import Inicio from "./components/Inicio";
import Contacto from "./components/Contacto";
import Nosotros from "./components/Nosotros";
import Productos from "./components/Productos";
import Servicios from "./components/Servicios";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
function App() {
  return (
   <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/productos" element={<Productos/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/servicios" element={<Servicios/>} />
        <Route path="/contacto" element={<Contacto/>} />
      </Routes>
      <Footer/>
   </BrowserRouter>
  );
}

export default App;
