import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './Header.css';

function Header() {
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();

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

        <button className="header-lang" onClick={toggleLanguage}>
          <span className={language === 'ko' ? 'active' : ''}>KOR</span>
          <span className="lang-divider">/</span>
          <span className={language === 'en' ? 'active' : ''}>ENG</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
