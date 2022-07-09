import React from "react";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import "../css/header.css";

function Title() {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="top">
        <Container>
          <Navbar.Brand href="#home">Isaac's Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#top">Top</Nav.Link>
              {/* <Nav.Link href="#link">Link</Nav.Link> */}
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" disabled>
                  These links take you to the part of the page
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  );
}

export default Title;
