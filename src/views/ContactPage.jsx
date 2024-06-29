import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function ContactPage() {
  const [correo, setCorreo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  return (
    <Container className="mt-5 text-center">
      <Row className="justify-content-center">
        <Col md={12} className="formulario">
          <h3>Cuentanos, ¿en que te podemos ayudar?</h3>
          <Form>
            <Form.Group controlId="formBasicCorreo">
              <Form.Label>Correo:</Form.Label>
              <Form.Control
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group controlId="formBasicDescripcion" >
              <Form.Label>Descripcion:</Form.Label>
              <Form.Control
                type="text"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                placeholder="Descripcion"
                as="textarea" rows={3}
              />
            </Form.Group>
            <Button variant="danger" size="sm" type="submit" className="w-25">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPage;
