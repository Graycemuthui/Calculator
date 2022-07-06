import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <nav className="nav-bar">
    <ul className="nav-links">
      <li>
        <Link to="/"> Home</Link>
      </li>
      <li className="list">
        <Link to="/calculator">Calculator</Link>
      </li>
      <li className="list">
        <Link to="quote"> Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
