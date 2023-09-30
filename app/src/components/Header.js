import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo192.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from './LanguageDropdown';

function Header() {
    const { t } = useTranslation();
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Fonction pour basculer entre le mode sombre et le mode clair
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Utilisez useEffect pour charger le fichier CSS en fonction de l'état du thème
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = isDarkMode ? 'AppDarkMode.css' : 'AppLightMode.css';

        // Ajoutez le lien au <head> du document
        document.head.appendChild(link);

        // Nettoyez le lien précédent lorsque le composant est démonté
        return () => {
            document.head.removeChild(link);
        };
    }, [isDarkMode]); // Effectuez cette opération lorsque l'état du thème change

    return (
        <header>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary py-4">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} className="App-logo" alt="logo" height="50" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Dashboard</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                                <span className='toggle-mode' onClick={toggleTheme}>
                                    <FontAwesomeIcon icon={faPaintBrush} className='toggle-mode-i' />
                                    {isDarkMode ? t('darkmode') : t('lightmode')}
                                </span>
                            </Nav.Link>
                            <Nav.Link href="#">
                                <LanguageDropdown />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;