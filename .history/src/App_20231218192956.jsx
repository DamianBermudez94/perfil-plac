
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {seccion1} from './components/seccion1';


const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li><Link to="/seccion1">Sección 1</Link></li>
          
        </ul>
      </nav>

      <hr />

      <Route path="/seccion1" component={<seccion1/>} />
    </div>
  </Router>
);

export default App;
