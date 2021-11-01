import React from 'react';
import './Header.css'
import logo from '../../../images/header/navLogo.png'
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {

    const {user, logOut} = useAuth()
   
    return (
        <>
        <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} className="header-logo" alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Tour Package</Nav.Link>
                        {/* <Nav.Link as={Link} to="/aboutUs">About Us</Nav.Link> */}
                        {user?.email ?
                            <Button onClick={logOut} className='bg-warning'>Logout</Button>
                            : 
                             <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        <Navbar.Text >
                        Signed in as: {user?.displayName}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;