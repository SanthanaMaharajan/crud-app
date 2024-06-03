import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import ReadTask from './components/ReadTask';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ApiTest from './components/Api';



function App() {
  return (
    <>
    {/* <Header/> */}
      <Container>
        <Row className='justify-content-md-center'>
          <Col lg="12">
            <ApiTest/>
            {/* <AddTask/>
            <ReadTask/> */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
