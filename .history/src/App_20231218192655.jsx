
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Seccion1 from './Seccion1';
import Seccion2 from './Seccion2';
import Seccion3 from './Seccion3';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li><Link to="/seccion1">Sección 1</Link></li>
          <li><Link to="/seccion2">Sección 2</Link></li>
          <li><Link to="/seccion3">Sección 3</Link></li>
        </ul>
      </nav>

      <hr />

      <Route path="/seccion1" component={Seccion1} />
      <Route path="/seccion2" component={Seccion2} />
      <Route path="/seccion3" component={Seccion3} />
    </div>
  </Router>
);

export default App;
