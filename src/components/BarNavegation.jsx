import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'


const BarNavegation = () => {
    return (
        <Navbar collapseOnSelect expand="xl" bg="person" variant="dark" >
            <Container>
                <Navbar.Brand className='logo-page' href="/">
                    <h1>
                        <FormattedMessage
                            id='id-logo1'
                            defaultMessage='Boss'
                        />
                        <span>
                            <FormattedMessage
                                id='id-logo2'
                                defaultMessage='Desing'
                            />
                        </span>
                    </h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="#id-presentation">
                            <FormattedMessage
                                id='id-nBar-init'
                                defaultMessage='Home'
                            />
                        </Nav.Link>
                        <Nav.Link href="#id-aboutMe">
                            <FormattedMessage
                                id='id-nBar-about'
                                defaultMessage='loading'
                            /> 
                    
                        </Nav.Link>
                        <Nav.Link href="#id-skills">
                            <FormattedMessage
                                id='id-nBar-skill'
                                defaultMessage='Skills'
                            />
                        </Nav.Link>
                        <Nav.Link href="#id-project">
                            <FormattedMessage
                                id='id-nBar-portafolio'
                                defaultMessage='Portafolio'
                            />
                        </Nav.Link>
                        <Nav.Link href="#id-contactMe">
                            <FormattedMessage
                                id='id-nBar-contact'
                                defaultMessage='Contact'
                            />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default BarNavegation;