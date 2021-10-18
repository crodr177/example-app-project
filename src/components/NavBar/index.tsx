import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './styles.css';
 
const NavBar = (): JSX.Element => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = useCallback(() => {
    setToggle(!toggle);
    console.log(toggle);
  }, [toggle, setToggle]
  );

  return (
    <div id="navBarContainer">
      <ul id="links">
        <li><Link to="/" className="link" href="_blank">Home</Link></li>
        <li><Link to="/about" className="link" href="_blank">About</Link></li>
        <li><Link to="/contact" className="link" href="_blank">Contact</Link></li>
        <li><Link to="/info" className="link" href="_blank">Info</Link></li>
      </ul>
      <FontAwesomeIcon id="burger" icon={faBars} onClick={toggleMenu}/>
      <div className={`dropdown-menu ${toggle ? "open" : "close"}`}>
        <ul id="burger-menu">
          <li className="burger-menu-li">
            <Link to="/" className="burger-menu-link" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="burger-menu-li">
            <Link to="/about" className="burger-menu-link" onClick={toggleMenu}>About</Link>
          </li>
          <li className="burger-menu-li">
            <Link to="/contact" className="burger-menu-link" onClick={toggleMenu}>Contact</Link>
          </li>
          <li className="burger-menu-li">
            <Link to="/info" className="burger-menu-link" onClick={toggleMenu}>Info</Link>
          </li>
        </ul>
      </div>
    </div> 
  );
}
 
export default NavBar;