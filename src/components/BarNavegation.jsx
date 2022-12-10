import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const BarNavegation = () => {
    return (
        <Navbar collapseOnSelect expand="xl" bg="person" variant="dark" >
            <Container>
                <Navbar.Brand className='logo-page' href="/">
                    <h1>Boss<span>Design</span></h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="#ini">Inicio</Nav.Link>
                        <Nav.Link href="#hab">Habilidades</Nav.Link>
                        <Nav.Link href="#port">Portafolio</Nav.Link>
                        <Nav.Link href="#cont">Contáctame</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default BarNavegation;