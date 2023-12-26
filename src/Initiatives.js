
import LS from './images/LS.png';
import Newsletter from './images/Newsletter.png';
import ICYDK from './images/ICYDK.png';
import SOC from './images/SOC.png';
import Reflections from './images/Reflections.png';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';


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

  function Initiatives() {
    return (
      <Container>
        <Col>
        <Row style={{ display: 'flex', justifyContent: 'center'}}>
            
            <ImageCard 
                imageSrc={LS}
            />
            <ImageCard
                style={{ border:'none' }}
                title="Learners' Space"
                description="Learners' Space is a programme conducted in collaboration with the Career Cell, where enthusiastic students can pursue courses of their interest. It serves as an excellent platform for students to learn new things and make the most out of their summer vacations"
            />
        </Row>
        <Row style={{ display: 'flex', justifyContent: 'center'}}>
            <ImageCard
                    title="Newsletter"
                    description="Learners' Space is a programme conducted in collaboration with the Career Cell, where enthusiastic students can pursue courses of their interest. It serves as an excellent platform for students to learn new things and make the most out of their summer vacations"
            />
            <ImageCard 
                imageSrc={Newsletter}
            />
            
        </Row>
        <Row style={{ display: 'flex', justifyContent: 'center'}}>
            <ImageCard 
                imageSrc={SOC}
            />
            <ImageCard
                title="Seasons of Code"
                description="Learners' Space is a programme conducted in collaboration with the Career Cell, where enthusiastic students can pursue courses of their interest. It serves as an excellent platform for students to learn new things and make the most out of their summer vacations"
            />
        </Row>
        <Row style={{ display: 'flex', justifyContent: 'center'}}>
        <ImageCard
                title="Reflections"
                description="Learners' Space is a programme conducted in collaboration with the Career Cell, where enthusiastic students can pursue courses of their interest. It serves as an excellent platform for students to learn new things and make the most out of their summer vacations"
            />
            <ImageCard 
                imageSrc={Reflections}
            />
            
        </Row>
        <Row style={{ display: 'flex', justifyContent: 'center'}}>
            <ImageCard 
                imageSrc={ICYDK}
            />
            <ImageCard
                title="In Case You Didn't Know"
                description="Learners' Space is a programme conducted in collaboration with the Career Cell, where enthusiastic students can pursue courses of their interest. It serves as an excellent platform for students to learn new things and make the most out of their summer vacations"
            />
        </Row>
        </Col>
      </Container>
    );
  }
  


export default Initiatives;



  