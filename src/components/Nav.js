import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="nav-links">
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/Calculator">
        <li>Calculator</li>
      </Link>
      <Link to="/Quote">
        <li>Quote</li>
      </Link>
    </ul>
  </nav>
);

export default Nav;
