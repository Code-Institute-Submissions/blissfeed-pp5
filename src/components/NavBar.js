import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="md" fixed="top">
      <Container>
        <Navbar.Brand>BlissFeed</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <Nav.Link>
              <i class="fa-solid fa-house"></i>
              Home
            </Nav.Link>
            <Nav.Link>
              <i class="fa-solid fa-right-to-bracket"></i>
              Sign in
            </Nav.Link>
            <Nav.Link>
              <i class="fa-solid fa-user"></i>
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
