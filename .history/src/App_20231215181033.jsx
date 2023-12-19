
import './App.css'
//import { Rutas } from './routers/Rutas';
import { Inicio } from "./components/Inicio";
import { Contacto } from "./components/Contacto";
import { Nosotros } from "./components/Nosotros";
import { Productos } from "./components/Productos";
import { Servicios } from "./components/Servicios";
import { Error } from "./components/Error";
import { NavBar } from "./layout/NavBar";


function App() {


  return (
    <div className='layout'>
      <NavBar/>
      <Inicio/>
      <Nosotros/>
      <Productos/>
      <Servicios/>
      <Contacto/>
      <Error/>
    </div>
  )
}

export default App
