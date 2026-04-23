
import React from "react";
import {Navbar , Container , NavDropdown , Nav}
 from 'react-bootstrap';
 import './Nav.css'
 import logo from '../../Assets/logo2.jpeg'
 import { FaSearch ,FaPhoneAlt , FaArrowLeft  } from "react-icons/fa";
 
 
 import { Link } from "react-router-dom";
 

const Navbars = () =>{
    return(
          <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo" alt="logoimage" src={logo} title="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="active">Home</Link>
           
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/aboutus">About Us </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ourteam" >Our Team</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/faqs" >FAQ's </NavDropdown.Item>
              
              <NavDropdown.Item as={Link} to="/login"  >Login / Register</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/services">Service</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.1">Service Details</NavDropdown.Item>
             
            </NavDropdown>
            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/blog" >Blog</NavDropdown.Item>
             
              
            </NavDropdown>

            <Link to="/contact">Contact us</Link>
             <Nav.Link as={Link} to="/research" ><FaSearch /></Nav.Link>
              <Nav.Link as={Link} to="/Info" >
                < FaPhoneAlt className="phone"/>
                + 1279834208
              </Nav.Link>
               <Nav.Link as={Link} to="/info">
                <button>Contact Us <span> <FaArrowLeft /> </span> </button>
               </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default Navbars;