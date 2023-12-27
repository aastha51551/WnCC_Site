import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './bar.css';
import fs from './images/fs.png';
import ImageCardRow from './About.js';
import Initiatives from './Initiatives.js';
import Events from './events.js';
import ibg from './images/ibg.png';
import bg2 from './images/bg2.png';
import bg3 from './images/bg3.png';
import CP from './Partnerships.js';

function Bar() {
    
  return (
    <>
    <Navbar expand="lg" className="barBackground">
      <Container>
        <Navbar.Brand href="#home" className='me-auto'>WnCC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text">Home</Nav.Link>
            <Nav.Link href="#about" className="text">About</Nav.Link>
            <Nav.Link href="#events" className="text">Events</Nav.Link>
            <Nav.Link href="#Initiatives" className="text">Initiatives</Nav.Link>
            <Nav.Link href="#team" className="text">Team</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   <div style={{ position: 'relative' }}>
    <img style ={{width : '100%'}} src={fs}/>
    <div className="subheading">Coders Together Strong!</div>
    <span className="text-box">Web and Coding Club</span>
    
   </div>
  
   <section className="about" id="about">
        <Container>
          <ImageCardRow/>
        </Container>
      </section>
    <section style={{ position: 'relative' }} id="Initiatives">
        <img style ={{width : '100%'}} src={ibg}/>
        <Container style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
          <h class="heading">Our Initiatives</h>
            <Initiatives/>
        </Container>
    </section>
    <section style={{ position: 'relative' }} id="events">
        <img style ={{width : '100%'}} src={bg2}/>
        <Container style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
          <h class="heading"> Our Events</h>
            <Events/>
        </Container>
    </section>
    <section style={{ position: 'relative' }} id="events">
        <img style ={{width : '100%', height:'900px'}} src={bg3}/>
        <Container style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
          <h style={{ marginTop: '60px' }} className="heading"> Partnerships</h>
            <CP/>
        </Container>
    </section>
    
   </>
  );
}

export default Bar;