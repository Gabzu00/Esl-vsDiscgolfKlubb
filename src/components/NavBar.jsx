import { Link, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css'

function NavBar() {
  const location = useLocation()

  return (<>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">
        <img
          src="Images.jpg\LoggaEslövsDiscGolf.png"
          width="80"
          height="80"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" activeKey={location.pathname}>
          <Nav.Link as={Link} to="/" eventKey="/">Start</Nav.Link>
          <Nav.Link as={Link} to="/banor" eventKey="/banor">Banor</Nav.Link>
          <Nav.Link as={Link} to="/medlemskap" eventKey="/medlemskap">Medlemskap</Nav.Link>
          <div className='loginner'>
            <Nav.Link as={Link} to="/login" eventKey="/login">Logga in </Nav.Link>

            <Nav.Link as={Link} to="/login" eventKey="/login">
              <img
                src="Images.jpg\LoginIcon.png"
                width="25"
                height="25"
                className="logga"
                alt="React Bootstrap logo"
              />
            </Nav.Link>
          </div>
          <Nav.Link as={Link} to="/kontakt" eventKey="/kontakt">Om oss</Nav.Link>
          <Nav.Link as={Link} to="/admin" eventKey="/admin">Admin</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
  );
}

export default NavBar;