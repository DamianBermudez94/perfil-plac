import { FiArrowRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";



const Inicio = () => {
  return (
    <>
    <section className="home-container" id="inicio">
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            ¡Bienvenidos a <span>Perfil-Plac innovasión</span>! Somos tu destino de confianza
            para la adquisición de insumos de construcción en seco de la más
            alta calidad. Con años de experiencia en la industria de la
            construcción en seco, nos enorgullece ofrecer a nuestros clientes
            una amplia gama de productos esenciales para que sus proyectos sean
            un éxito.
          </h1>

          <NavLink className="button-informacion" to="/contacto">
            más información
            <FiArrowRight />
          </NavLink>
        </div>
      </div>
    </section>
   
    </>
  );
};

export default Inicio;
