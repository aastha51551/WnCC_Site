import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import OurBeliefs from './images/Our Beliefs.png';
import vision from './images/vision.png';
import WhatDoWeDo from './images/What Do We Do.png';

function ImageCard(props) {
    return (
      <Card style={{ width: '18rem' }} className="border-0">
        <Image src={props.imageSrc} alt="Card image" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
  
  function ImageCardRow() {
    return (
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between' }} >
          <ImageCard
            imageSrc={vision}
            
            description="Web and Coding Club is one of the biggest clubs of IIT Bombay. As a part of the Institute Technical Council, we aim to provide a gateway for the people in our institute to join the coding community. "
          />
          <ImageCard
            
            imageSrc={WhatDoWeDo}
            
            description="We create a platform which allows students to gain assistance and mentorship to enhance their coding ability.  "
          />
          <ImageCard
            imageSrc={OurBeliefs}
            
            description="We believe that every student here at IITB should have an opportunity to learn how to code and develop a passion for it. The secret of getting ahead is getting started and we aim to provide every student with the right start."
          />
        </div>
      </Container>
    );
  }
  
  export default ImageCardRow;
  