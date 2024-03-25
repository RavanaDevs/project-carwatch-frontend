import '../App.css'
import { Nav, Navbar, Container } from 'react-bootstrap'

const NavBar = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand>CarWatch</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link className='nav-link-custom'>Home</Nav.Link>
              <Nav.Link className='nav-link-custom'>Profile</Nav.Link>
              <Nav.Link className='nav-link-custom'>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
