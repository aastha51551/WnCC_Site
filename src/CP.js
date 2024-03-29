import { Container, Row, Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import oct from './images/CP Calendar/oct.jpeg';

function ImageCard(props) {
    return (
      <Card style={{ width: '18rem' }} className='border-0'>
        <Image src={props.imageSrc}  />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
  
  function CP() {
    return (
      <Container>
        <Row style={{ display: 'flex', justifyContent: 'center'}}>
            
            <img src={oct} style={{height:'70%', width:'50%',  marginLeft: '0%'}}/>
            <Col>
            <p>content</p>
            <Button block>Cp Site</Button>
            </Col>
            
        </Row>
      </Container>
    );
  }
  


export default CP;