import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap';

import './TopNavbar.css';

const TopNavbar = () => {
    return (
        <header className='survey-navbar'>
            <Navbar collapseOnSelect expand="sm">
                <Navbar.Brand className="custom-brand">
                    <Link to="/">
                        <i className="brand-text">Nuwm Survey</i>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/surveys">
                            <Nav.Link>Анкети</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default TopNavbar;