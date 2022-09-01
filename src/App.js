import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import './App.css';
import BasicNavBar from './components/BasicNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Roupas from './pages/Roupas';

function App() {
  return (
    <div className="App">
      <Container fluid>

        <BasicNavBar/>
        <Row className='pt-2'>
          <Col md={8}/>
          <Col md={4} >
              <InputGroup className='mb-3'>
                <Form.Control
                  placeholder="O que procura?"
                  aria-label="O que procura?"
                  aria-describedby="basic-addon1"
                />
                <Button variant="outline-secondary" id="buttonSearch">
                  Pesquisar
                </Button>
              </InputGroup>
          
          </Col>
        </Row>
      </Container>
      <Row className='p-5'/>
      <Container fluid>
        <Roupas/>

      </Container>
    </div>
  );
}

export default App;
