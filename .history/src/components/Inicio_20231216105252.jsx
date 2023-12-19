import BannerBackground from "../Assets/pexels-max-rahubovskiy-6238608.jpg";

import Navbar from "../components/NavBar";
import { FiArrowRight } from "react-icons/fi";

const Inicio = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            ¡Bienvenidos a PerfilPlac innovasión! Somos tu destino de confianza
            para la adquisición de insumos de construcción en seco de la más
            alta calidad. Con años de experiencia en la industria de la
            construcción en seco, nos enorgullece ofrecer a nuestros clientes
            una amplia gama de productos esenciales para que sus proyectos sean
            un éxito.
          </h1>

          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
