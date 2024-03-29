import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import OurBeliefs from './images/Our Beliefs.png';
import vision from './images/vision.png';
import WhatDoWeDo from './images/What Do We Do.png';

function ImageCard(props) {
  const [isHovered, setHovered] = useState(false);

  const cardSpring = useSpring({
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
  });

  return (
    <animated.div
      style={cardSpring}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Card style={{ width: '25rem', backgroundColor: 'black', fontFamily:'orbitron'}} className="border-0">
        <Card.Body>
          <Card.Title style={{color: 'blue',fontSize:'40px'}}>{props.title}</Card.Title>
          <Card.Text style={{color: 'blue',fontSize:'20px'}}>{props.description}</Card.Text>
        </Card.Body>
      </Card>
    </animated.div>
  );
}

function ImageCardRow() {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when the component mounts
    setVisible(true);
  }, []);

  const rowSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    from: { opacity: 0 },
  });

  return (
    <animated.div style={{ ...rowSpring, position: 'absolute',top: '30%', left: '50%' }}>
      <Container>
        <div >
          <ImageCard
            title='About Us'
            description="Web and Coding Club is one of the biggest clubs of IIT Bombay. As a part of the Institute Technical Council, we aim to provide a gateway for the people in our institute to join the coding community."
          />
        </div>
      </Container>
    </animated.div>
  );
}

export default ImageCardRow;
