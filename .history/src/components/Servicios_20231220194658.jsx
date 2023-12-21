import {} from "react-icons/ai";
import { FaClipboardCheck } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa";

const Servicios = () => {
  return (
    <section className="container-servicios">
      <div>
      <h1 className="title-servicios">Servicios</h1>
      </div>
      

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
          Contamos con un equipo especializado para ayudar a nuestros clientes.
        </p>
      </div>
      <div className="card-servicios">
        <FaTruckFast className="icons-servicios" />
        <h2>Entrega inmediata</h2>
        <p>Para cumplir con los tiempo de obra.</p>
      </div>
    </section>
  );
};

export default Servicios;
