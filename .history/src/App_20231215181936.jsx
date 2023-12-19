import "./App.css";
import Home from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Productos from "./components/Productos";
import Testimonial from "./components/Testimonial";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Nosotros />
      <Productos />
      <Testimonial />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
