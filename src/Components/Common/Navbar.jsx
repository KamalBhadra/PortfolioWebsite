import {
    CCloseButton,
    CContainer,
    CNavItem,
    CNavbar,
    CNavbarNav,
    CNavbarToggler,
    COffcanvas,
    COffcanvasBody,
    COffcanvasHeader
} from '@coreui/react';
import React, { useState } from 'react';
import { FcBusinessContact, FcHome, FcManager } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';


export default function Navbar() {
   
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavLinkClick = (path) => {
        setVisible(false);
        navigate(path);
    };

    return (
        <section className="nav-bar">
            <div className="nav-link">
                <ul>
                    <li className={location.pathname === '/' ? 'active-link' : ''} onClick={() => handleNavLinkClick('/')}>
                        <FcHome className="icons" />
                        Home
                    </li>
                    <li className={location.pathname === '/projects' ? 'active-link' : ''} onClick={() => handleNavLinkClick('/projects')}>
                        <img src="/Images/projectsicon.png" alt="project-icon" className="icon-image" />
                        Projects
                    </li>
                    <li className={location.pathname === '/about' ? 'active-link' : ''} onClick={() => handleNavLinkClick('/about')}>
                        <FcManager className="icons" />
                        About Me
                    </li>
                    <li className={location.pathname === '/contact' ? 'active-link' : ''} onClick={() => handleNavLinkClick('/contact')}>
                        <FcBusinessContact className="icons" />
                        Contact
                    </li>
                </ul>
            </div>
            <CNavbar colorScheme="light" className="bg-light mobile-nav" expand="xxl">
                <CContainer fluid className="nav-container">
                    <CNavbarToggler
                        className="nav-btn"
                        aria-controls="offcanvasNavbar2"
                        aria-label="Toggle navigation"
                        onClick={() => setVisible(!visible)}
                    />
                    <COffcanvas
                        className="canvas"
                        id="offcanvasNavbar2"
                        placement="end"
                        portal={false}
                        visible={visible}
                        onHide={() => setVisible(false)}
                    >
                        <COffcanvasHeader className="nav-header">
                            <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
                        </COffcanvasHeader>
                        <COffcanvasBody className="canvas-body">
                            <CNavbarNav className="canvas-nav">
                                <CNavItem className="canvas-item">
                                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active-link' : ''}`} onClick={() => setVisible(false)}>
                                        <FcHome className="icons" />
                                        <span> HOME</span>
                                    </Link>
                                </CNavItem>
                                <CNavItem className="canvas-item">
                                    <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active-link' : ''}`} onClick={() => setVisible(false)}>
                                        <img src="/Images/projectsicon.png" alt="project-icon" className="icon-image" />
                                        <span> PROJECTS</span>
                                    </Link>
                                </CNavItem>
                                <CNavItem className="canvas-item">
                                    <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active-link' : ''}`} onClick={() => setVisible(false)}>
                                        <FcManager className="icons" />
                                        <span>ABOUT ME</span>
                                    </Link>
                                </CNavItem>
                                <CNavItem className="canvas-item">
                                    <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active-link' : ''}`} onClick={() => setVisible(false)}>
                                        <FcBusinessContact className="icons" />
                                        <span>CONTACT</span>
                                    </Link>
                                </CNavItem>
                            </CNavbarNav>
                        </COffcanvasBody>
                    </COffcanvas>
                </CContainer>
            </CNavbar>
        </section>
    );
}
