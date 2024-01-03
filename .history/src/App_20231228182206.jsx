import "./App.css";

import { Route, Switch } from 'react-router-dom';
//import { Rutas } from "./routers/Rutas";
import {footer } from "./components/Footer"
function App() {
  return (
    <div className="App">
      <div>
      <Switch>
        <Route path="/about" component={footer} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
    </div>
  );
}

export default App;
