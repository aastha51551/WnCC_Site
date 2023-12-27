import React from 'react';
import { Carousel } from 'react-bootstrap';
import fs from './images/fs.png';
import './Partnerships.css';

const CP= () => {
  return (
    <div className="container">
      <Carousel id="demo" className="slide" interval={null}>
        <Carousel.Item>
          <div className="carousel-caption">
            <p>
              lorem ipsum dolor sit amet, consectetur adip non pro id el elementum  et  just
            </p>
            <img src={fs} alt="First slide" />
            <div id="image-caption">Company Name</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-caption">
            <p>
            lorem ipsum dolor sit amet, consectetur adip non pro id el elementum  et  just
            </p>
            <img src={fs} alt="Second slide" className="img-fluid" />
            <div id="image-caption">Company Name</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-caption">
            <p>
            lorem ipsum dolor sit amet, consectetur adip non pro id el elementum  et  just
            </p>
            <img src={fs}  className="img-fluid" />
            <div id="image-caption">Company name</div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CP;
