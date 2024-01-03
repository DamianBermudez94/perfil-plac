import "./App.css";

import { Route } from "react-router-dom";
//import { Rutas } from "./routers/Rutas";

import Inicio from "./components/Inicio";
import Contacto from "./components/Contacto";
import Nosotros from "./components/Nosotros";
import Productos from "./components/Productos";
import Servicios from "./components/Servicios";
import { Router } from "@mui/icons-material";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Inicio} />
        <Route path="/productos" component={Productos} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/servicios" component={Servicios} />
        <Route path="/contacto" component={Contacto} />
      </Router>
    </div>
  );
}

export default App;
