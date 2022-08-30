import { Link } from "react-router-dom";

import { Button, Container, Nav, Navbar, NavItem } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container >
          <Navbar.Collapse>
            <Navbar.Brand href="#home">Guerra Estrelar</Navbar.Brand>
            <Nav className="mr-auto">
            <NavItem>
                <Nav.Link as={Link} to="/" >Personages</Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link as={Link} to="/armas" >Armas</Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link as={Link} to="/nave-espacial" >Naves Espacial</Nav.Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
          <Button variant="outline-success">Login</Button>
        </Container>
      </Navbar>
    </>
  );
}