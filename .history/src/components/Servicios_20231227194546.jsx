import {} from "react-icons/ai";
import { FaClipboardCheck } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa";

const Servicios = () => {
  return (
    <section className="container-servicios">
      <h1>Servicios</h1>
      <div className="container-card">
        <div className="card-servicios">
          <FaClipboardCheck className="icons-servicios" />
          <h2>Amplio catálogo</h2>
          <p>
            Ofrecemos materiales de primera calidad, con las mejores marcas del
            mercado.
          </p>
        </div>
        <div className="card-servicios">
          <FaHeadset className="icons-servicios" />
          <h2>Asesoramiento</h2>
          <p>
            Contamos con un equipo especializado para ayudar a nuestros
            clientes.
          </p>
        </div>
        <div className="card-servicios">
          <FaTruckFast className="icons-servicios" />
          <h2>Entrega inmediata</h2>
          <p>Para cumplir con los tiempo de obra.</p>
        </div>
        
      </div>
      <strong>No dudes en comunicarte por algunos de nuestros medios*</strong>
    </section>
  );
};

export default Servicios;