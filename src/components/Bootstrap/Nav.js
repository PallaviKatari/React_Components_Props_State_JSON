import React from 'react';
//Boostrap npm install react-bootstrap-validation --save
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function NavComponent()
{
return (
    //Bootstrap Navbar
    <div className="App">
      <Navbar fixed='top' bg="secondary" expand="lg">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#"></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Item 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated Item</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
      )
      }

      export default NavComponent;