import "./App.css";
import Home from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Nosotros />
      <Work />
      <Testimonial />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
