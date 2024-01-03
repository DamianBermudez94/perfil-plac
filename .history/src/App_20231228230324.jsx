import "./App.css";


//import { Rutas } from "./routers/Rutas";

import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import Productos from "./pages/Productos";
import Servicios from "./pages/Servicios";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
function App() {
  return (
    <main>
      <Inicio/>
      <Contacto/>
      <Nosotros/>
      <Productos/>
      <Servicios/>

    </main>
  );
}

export default App;
