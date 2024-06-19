
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Homepage from '../pages/Homepage';



function CustomNavbar() {
  return ( 
    
    <Navbar className="NavFont fixed-top text-white" expand="lg">
    <Navbar.Brand className='text-white' href="/">Bliss</Navbar.Brand>
    
      <Nav className="NavFont text-white">
        <Nav className='btn text-white' onClick={Homepage}>Github</Nav>
        <Nav className='btn text-white' >Cart</Nav>

        <NavDropdown className='btn2' title="Core Skills" id="basic-nav-dropdown" >
          <NavDropdown.Item >Bootstrap & Tailwind</NavDropdown.Item>
          <NavDropdown.Item >Full Stack</NavDropdown.Item>
          <NavDropdown.Item >Mongoose Expert</NavDropdown.Item>
          <NavDropdown.Divider />
          <a style={{ textDecoration: 'none' }}>
          <NavDropdown.Item href='https://www.linkedin.com/in/sadafkhan7/'>Linkedin</NavDropdown.Item>
          </a>
        </NavDropdown>

      </Nav>
  </Navbar>
  )
}

export default CustomNavbar