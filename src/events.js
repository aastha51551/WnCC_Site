import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './events.css'; // Import your CSS file for styling
import SOC2 from './images/SOC2.png';
import SS from './images/SS.png';
import TECHTREK from './images/TECHTREK.png';
import Codewars from './images/Codewars.png';
import HelloFoss from './images/Hello Foss.png';

const Events = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-scrolling
    autoplaySpeed: 5,
  };

  return (
    <div className="ess">
      <Slider {...settings}>
        <div className="slide">
          <img src={SOC2} alt="Slide 1" />
        </div>
        <div className="slide">
          <img src={HelloFoss} alt="Slide 2" />
        </div>
        <div className="slide">
          <img src={TECHTREK} alt="Slide 3" />
        </div>
        <div className="slide">
          <img src={Codewars} alt="Slide 4" />
        </div>
        <div className="slide">
          <img src={SS} alt="Slide 5" />
        </div>
       
      </Slider>
      
    </div>
  );
};

export default Events;
