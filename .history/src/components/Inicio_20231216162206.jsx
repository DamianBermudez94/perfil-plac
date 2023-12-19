
import { FiArrowRight } from "react-icons/fi";

const Inicio = () => {
  return (
    <section className="home-container">
      
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
          mas información<FiArrowRight />{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
