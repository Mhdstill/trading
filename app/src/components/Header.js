import React, { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../logo192.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from './LanguageDropdown';
import { useTheme } from '..//contexts/ThemeContext'; // Utilisez le hook useTheme pour accéder à isDarkMode et toggleTheme

function Header() {
  const { t } = useTranslation();
  const { isDarkMode, toggleTheme } = useTheme(); // Utilisez le hook useTheme pour accéder à l'état et à la fonction

  useEffect(() => {
    // Mettez à jour le thème ici (par exemple, ajoutez ou supprimez une classe CSS)
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = isDarkMode ? 'AppDarkMode.css' : 'AppLightMode.css';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [isDarkMode]);

    return (
        <header>
            <Navbar expand="lg" className="py-4 bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} className="App-logo" alt="logo" height="50" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='d-flex align-items-center justify-content-center me-auto'>
                            <Nav.Link as={Link} to="/">{t('home')}</Nav.Link>
                            <Nav.Link as={Link} to="/dashboard">{t('dashboard')}</Nav.Link>
                        </Nav>
                        <Nav className='d-flex align-items-center justify-content-center'>
                            <span onClick={toggleTheme} className='nav-link toggle-mode'>
                                <FontAwesomeIcon icon={faPaintBrush} className='toggle-mode-i' />
                                {isDarkMode ? t('darkmode') : t('lightmode')}
                            </span>
                            <span className='nav-link'>
                                <Link to="/register" className='custom-button-outline'>{t('register')}</Link>
                            </span>
                            <span className='nav-link'>
                                <Link to="/signin" className='custom-button'>{t('signin')}</Link>
                            </span>
                            <span className='nav-link'>
                                <LanguageDropdown />
                            </span>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
