import {} from "react-icons/ai";
import { FaClipboardCheck } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa";

const Servicios = () => {
  return (
    <div className="work-section-wrapper" id="#servicios">
      <div className="work-section-top">
        <h1 className="title-servicios">Servicios</h1>
      </div>
      <div className="testimonial-section-bottom">
        <FaClipboardCheck className="icons-servicios" />
        <h2>Amplio catálogo</h2>
        <p>
          Ofrecemos materiales de primera calidad, con las mejores marcas del
          mercado.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <FaHeadset className="icons-servicios" />
        <h2>Asesoramiento</h2>
        <p>
          Contamos con un equipo especializado para ayudar a nuestros clientes.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <FaTruckFast className="icons-servicios" />
        <h2>Entrega inmediata</h2>
        <p>Para cumplir con los tiempo de obra.</p>
      </div>
    </div>
  );
};

export default Servicios;
