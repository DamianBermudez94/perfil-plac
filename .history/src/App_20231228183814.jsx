import "./App.css";

import { Route, Router, BrowserRouter } from "react-router-dom";
//import { Rutas } from "./routers/Rutas";

import Inicio from "./components/Inicio";
import Contacto from "./components/Contacto";
import Nosotros from "./components/Nosotros";
import Productos from "./components/Productos";
import Servicios from "./components/Servicios";
function App() {
  return (
   
      <Router>
        <Route path="/" component={<Inicio>} />
        <Route path="/productos" component={Productos} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/servicios" component={Servicios} />
        <Route path="/contacto" component={Contacto} />
      </Router>
   
  );
}

export default App;
