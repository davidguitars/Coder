import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget'





const NavbarContent = () => {
  return (
    <div>
   <Navbar className="navbarContent" bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="/">Crypto card</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        
           <Nav.Link href="/contact" >
              Contact
            </Nav.Link>
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
