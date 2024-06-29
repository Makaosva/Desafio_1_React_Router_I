import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function ContactPage() {
  const [correo, setCorreo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  return (
    <Container className="mt-5 text-danger">
      <Row className="justify-content-center">
        <Col md={6}>
          <h3>Cuentanos, ¿en que te podemos ayudar?</h3>
          <Form>
            <Form.Group controlId="formBasicCorreo">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="Correo"
              />
            </Form.Group>
            <Form.Group controlId="formBasicDescripcion">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                type="text"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                placeholder="Descripcion"
              />
            </Form.Group>
            <Button variant="danger" type="submit" className="w-100">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPage;
