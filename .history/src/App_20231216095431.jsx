import "./App.css";

import { useRef } from 'react';
import Header from './Header';

const App = () => {
  const seccion1Ref = useRef(null);
  const seccion2Ref = useRef(null);
  const seccion3Ref = useRef(null);

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
      case 'seccion1':
        return seccion1Ref;
      case 'seccion2':
        return seccion2Ref;
      case 'seccion3':
        return seccion3Ref;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header scrollToSection={scrollToSection} />
      <div ref={seccion1Ref}>
        <h2>Sección 1</h2>
        {/* Contenido de la Sección 1 */}
      </div>
      <div ref={seccion2Ref}>
        <h2>Sección 2</h2>
        {/* Contenido de la Sección 2 */}
      </div>
      <div ref={seccion3Ref}>
        <h2>Sección 3</h2>
        {/* Contenido de la Sección 3 */}
      </div>
    </div>
  );
}

export default App;
