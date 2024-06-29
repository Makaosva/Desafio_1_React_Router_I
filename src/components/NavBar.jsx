import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="danger" variant="dark">
      <Container fluid className="justify-content-start">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Home 🏠
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>Happy Cake 🥧</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
