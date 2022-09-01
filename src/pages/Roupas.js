import { Col, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Roupas() {
  return (
    <Row>
        <Col>
            <FloatingLabel controlId="floatingEmail" label="Email" >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
        </Col>
        <Col>
            <FloatingLabel controlId="floatingSenha" label="Senha">
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
        </Col>
      <Col>
        <FloatingLabel controlId="floatingTexto" label="Texto">
            <Form.Control type="text" placeholder="Texto" />
        </FloatingLabel>
      </Col>
      <Col>
        <FloatingLabel controlId="floatingPassword" label="Numero">
            <Form.Control type="number" placeholder="Numero" />
        </FloatingLabel>
      </Col>
    </Row>
  );
}

export default Roupas;