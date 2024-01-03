import "./App.css";

import { Route, Switch } from 'react-router-dom';
//import { Rutas } from "./routers/Rutas";
import {footer } from "./components/Footer";
import {Inicio} from "./components/Inicio";
import Contacto from "../components/Contacto";
import Nosotros from "../components/Nosotros";
import Productos from "../components/Productos";
import Servicios from "../components/Servicios";
function App() {
  return (
    <div className="App">
      <div>
      <Switch>
        <Route path="/about" component={footer} />
        <Route path="/" component={Inicio} />
      </Switch>
    </div>
    </div>
  );
}

export default App;
