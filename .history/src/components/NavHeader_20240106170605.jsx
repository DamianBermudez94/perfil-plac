import  {useState} from 'react';
import { NavLink } from 'react-router-dom';

import BurguerButton from './BurgerButton';



const NavHeader = () => {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
      //cuando esta true lo pasa a false y vice versa
    
    setClicked(!clicked)
      
    }
  return (
    <header className='header'>
            <div className='logo'>
                <NavLink to="/inicio"><img src={"PerfilPlac.png"} alt='Perfil-Plac durlock construccion en seco'></img></NavLink>
            </div>
        
                <BurguerButton className="btn-menu" clicked={clicked} handleClick={handleClick} />
                <nav  className={`links ${clicked ? 'active' : ''}`}>
                    <ul>
                        <li>
                            <NavLink to="/inicio" onClick={handleClick} className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/servicios" onClick={handleClick} className={({isActive}) => isActive ? "active" : ""}>porfolio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/productos" onClick={handleClick} className={({isActive}) => isActive ? "active" : ""}>servicios</NavLink>
                        </li>
                        <li>
                            <NavLink to="/nosotros" onClick={handleClick} className={({isActive}) => isActive ? "active" : ""}>conocimientos</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacto" onClick={handleClick} className={({isActive}) => isActive ? "active" : ""}>contacto</NavLink>
                        </li>
                    </ul>
                </nav>
           
    </header>
  )
}

export default NavHeader