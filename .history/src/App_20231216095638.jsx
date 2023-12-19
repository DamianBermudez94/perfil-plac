import "./App.css";

import { useRef } from 'react';
import Header from './Header';

const App = () => {
  const inicio = useRef(null);
  const nosotros = useRef(null);
  const servicios = useRef(null);
  const prductos = useRef(null);
  const contacto = useRef(null);

  const scrollToSection = (section) => {
    const sectionRef = getSectionRef(section);

    if (sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const getSectionRef = (section) => {
    switch (section) {
      case 'inicio':
        return inicio;
      case 'nosotros':
        return nosotros;
      case 'servicios':
        return servicios;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header scrollToSection={scrollToSection} />
      <div ref={inicio}>
        <h2>Sección 1</h2>
        {/* Contenido de la Sección 1 */}
      </div>
      <div ref={nosotros}>
        <h2>Sección 2</h2>
        {/* Contenido de la Sección 2 */}
      </div>
      <div ref={servicios}>
        <h2>Sección 3</h2>
        {/* Contenido de la Sección 3 */}
      </div>
    </div>
  );
}

export default App;
