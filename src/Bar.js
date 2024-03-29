import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './bar.css';
import  logo from './images/logo.png';
import ImageCardRow from './About.js';
import Initiatives from './Initiatives.js';
import { useSpring, animated } from 'react-spring';
import Events from './events.js';
import ibg from './images/ibg.png';
import bg2 from './images/bg2.png';
import bg3 from './images/bg3.png';
import bg5 from './images/bg5.png';
import about from './images/about.gif';
import Partnerships from './Partnerships.js';
import bg4 from './images/bg4.gif';

import CP from './CP.js';


function Bar() {
  const headingSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 290, friction: 30 }, // Adjust animation configuration if needed
  });
      
  return (
    <>
    <Navbar expand="lg" className="barBackground fixed-top">
      <Container>
      <Navbar.Brand href="#home" className='me-auto' style={{ fontFamily: 'orbitron', height:'100px' }}>
      <img
        src={logo}  
        alt="WnCC"
        style={{ width: '100px', height: '100px', position: 'absolute', top: '0', left: '0' }}  // Adjust the width and height as needed
      />  
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#home" className="text" style={{ fontFamily:'orbitron' }}>Home</Nav.Link>
        <Nav.Link href="#about" className="text" style={{ fontFamily:'orbitron' }}>About</Nav.Link>
        <Nav.Link href="#events" className="text" style={{ fontFamily:'orbitron' }}>Events</Nav.Link>
        <Nav.Link href="#Initiatives" className="text" style={{ fontFamily:'orbitron' }}>Initiatives</Nav.Link>
        <Nav.Link href="#team" className="text" style={{ fontFamily:'orbitron' }}>Team</Nav.Link>
      </Nav>
    </Navbar.Collapse>
      </Container>
    </Navbar>
   <div style={{ position: 'relative' }}>
    
    <div className="subheading">Coders Together Strong!</div>
    <span className="text-box">Web and Coding Club</span>
    <img style ={{width : '100%'}} src={bg4}/>
   </div>
  
   <section className="about" id="about" style={{ position: 'relative' }}>
        <img style ={{width : '100%'}} src={about}/>
        <Container style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
          <ImageCardRow/>
        </Container>

      </section>
    <section style={{ position: 'relative' }} id="Initiatives">
        <img style ={{width : '100%'}} src={ibg}/>
        <Container style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
        <animated.h1 style={headingSpring} className="heading">
          Our Initiatives
        </animated.h1>
            <Initiatives/>
        </Container>
    </section>
    <section style={{ position: 'relative' }} id="events">
        <img style ={{width : '100%'}} src={bg2}/>
        <Container style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
        <animated.h1 style={headingSpring} className="heading">
          Our Events
        </animated.h1>
            <Events/>
        </Container>
    </section>
    <section style={{ position: 'relative' }} id="events">
        <img style ={{width : '100%', height:'650px'}} src={bg3}/>
        <Container style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
          <h style={{ marginTop: '60px' }} className="heading"> Partnerships</h>
            <Partnerships/>
        </Container>
    </section>
    <section style={{ position: 'relative' }} id="events">
        <img style ={{width : '100%', height:'100%'}} src={bg5}/>
        <Container style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
          <h style={{ marginTop: '60px' }} className="heading2"> Competitive Programming</h>
            <CP/>
        </Container>
    </section>
    
    
   </>
  );
}

export default Bar;