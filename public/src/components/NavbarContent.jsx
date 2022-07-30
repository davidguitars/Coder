import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget'




const NavbarContent = () => {
  return (
    <div>
   <Navbar className="navbarContent" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Crypto card</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">NFTS</Nav.Link>
            <NavDropdown title="Options" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">NFTS Option</NavDropdown.Item>
              <NavDropdown.Item href="#action4"> 
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" >
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    
    </Navbar>
    
  </div>
  )
}

export default NavbarContent
