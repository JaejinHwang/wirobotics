import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/vision" className="header-logo">
          <img src="/images/logo_white.png" alt="WIRobotics" />
        </Link>

        <nav className="header-nav">
          <Link
            to="/vision"
            className={`nav-link ${isActive('/vision') ? 'active' : ''}`}
          >
            VISION
          </Link>
          <Link
            to="/allex"
            className={`nav-link ${isActive('/allex') ? 'active' : ''}`}
          >
            ALLEX
          </Link>
          <Link
            to="/careers"
            className={`nav-link ${isActive('/careers') ? 'active' : ''}`}
          >
            CAREERS
          </Link>
        </nav>

        <div className="header-lang">
          KOR/ENG
        </div>
      </div>
    </header>
  );
}

export default Header;
