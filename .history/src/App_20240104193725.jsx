import "./App.css";
import 'atropos/css'
import Atropos from 'atropos/react';
import { Rutas } from "./routers/Rutas";
function App() {
  return (
    <div className="App">
       {/* Atropos */}
       <Atropos className="my-atropos">
        {/* ... */}
        <Rutas />
      </Atropos>
      
    </div>
  );
}

export default App;
