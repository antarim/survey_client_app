import {Image, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap';

import logo from '../../leo64.svg';

import './TopNavbar.css';

const TopNavbar = () => {
    return (
        <header className='survey-navbar'>
            <Navbar collapseOnSelect expand="sm">
                <Navbar.Brand>
                    <Link to="/">
                        <Image src={logo} alt="Logo" height="40"/>
                        {' '}
                        <b className="brand-text">NUWM Опитування</b>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/surveys">
                            <Nav.Link>Анкети</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/responses">
                            <Nav.Link>Результати</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default TopNavbar;