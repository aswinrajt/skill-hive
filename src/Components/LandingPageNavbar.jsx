import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const LandingPageNavbar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">SkillHive</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item href="/adminauth">Admin Login</NavDropdown.Item>
              <NavDropdown.Item href="/teacherauth">Teacher Login</NavDropdown.Item>
              <NavDropdown.Item href="/auth">Student Login</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default LandingPageNavbar;
