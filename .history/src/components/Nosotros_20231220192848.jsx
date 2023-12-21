import { NavLink } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Nosotros = () => {
  return (
    <div className="about-section-container">
      <div className="container-text">
        <h1>¿Por que elegirnos?</h1>
        <p>
          En PerfilPlac innovasión nos enorgullecemos de ofrecer productos de la
          más alta calidad. Todos nuestros productos son seleccionados
          cuidadosamente para asegurar que cumplen con los estándares de la
          industria y satisfacen las necesidades de nuestros clientes. La
          satisfacción del cliente es nuestra máxima prioridad.
        </p>
        <p>
          Nuestros insumos para la construcción en seco son la elección ideal
          para llevar a cabo tus proyectos de renovación. Con durlock, yeso,
          perfiles y masilla de alta calidad, podrás crear espacios modernos y
          funcionales sin complicaciones. Obtén resultados profesionales y
          ahorra tiempo y esfuerzo con nuestros productos. ¡No esperes más y
          descubre la calidad que ofrecemos!
        </p>
        <NavLink className="button-informacion" to="/contacto">mas infomacion  <FiArrowRight /></NavLink>
      </div>
    </div>
  );
};

export default Nosotros;
