import React from 'react';
import { Container, Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Logo.png';





const Header = () => {
    return (

       
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"><img src={logo} alt="" style={{ height: "50px" }} /></Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Form>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className=" ml-auto">
                        <Nav.Link href="#home">News</Nav.Link>
                        <Nav.Link href="#link">Destination</Nav.Link>
                        <Nav.Link href="#home">Blog</Nav.Link>
                        <Nav.Link href="#home">Contact</Nav.Link>
                    </Nav>
                    <Link to="/login">
                        <Button variant="warning" >Login</Button>
                    </Link>

                </Navbar.Collapse>
            </Navbar>
     

    );
};

export default Header;