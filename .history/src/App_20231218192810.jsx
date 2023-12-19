
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Seccion1 from './Seccion1';


const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li><Link to="/seccion1">Sección 1</Link></li>
          
        </ul>
      </nav>

      <hr />

      <Route path="/seccion1" component={Seccion1} />
    </div>
  </Router>
);

export default App;
