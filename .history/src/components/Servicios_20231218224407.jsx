import {} from "react-icons/ai";
import { FaClipboardCheck } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";

const Servicios = () => {
  return (
    <div className="work-section-wrapper" id="#servicios">
      <div className="work-section-top">
        <h1 className="primary-heading">Servicios</h1>
      </div>
      <div className="testimonial-section-bottom">
        <FaClipboardCheck />
        <h2>Amplio catálogo</h2>
        <p>
          Ofrecemos materiales de primera calidad, con las mejores marcas del
          mercado.
        </p>
        <div className="testimonials-stars-container"></div>
      </div>
      <div className="testimonial-section-bottom">
        <h2>Amplio stock</h2>
        <p>Garantizado, todo lo que necesitas en un sólo lugar.</p>
        <div className="testimonials-stars-container"></div>
      </div>
      <div className="testimonial-section-bottom">
        <h2>Asesoramiento</h2>
        <p>
          Contamos con un equipo especializado para ayudar a nuestros clientes.
        </p>
        <div className="testimonials-stars-container"></div>
      </div>
      <div className="testimonial-section-bottom">
      <FaTruckFast />
        <h2>Entrega inmediata</h2>
        <p>Para cumplir con los tiempo de obra.</p>
        <div className="testimonials-stars-container"></div>
      </div>
    </div>
  );
};

export default Servicios;
