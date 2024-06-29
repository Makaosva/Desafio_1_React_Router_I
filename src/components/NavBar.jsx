import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="danger" expand="lg">
      <Container fluid className="justify-content-start">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              🏠 Home
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto">
              📖 Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand className="justify-content-end">
          Happy Cake 🍰
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
