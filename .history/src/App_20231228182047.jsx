import "./App.css";

import { Route, Switch } from 'react-router-dom';
import { Rutas } from "./routers/Rutas";
function App() {
  return (
    <div className="App">
      <Rutas />
    </div>
  );
}

export default App;
