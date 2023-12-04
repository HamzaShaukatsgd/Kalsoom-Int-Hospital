import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../cssfiles/Navbar1.css"
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";



const Navbar1 = () => {
  return (
    <div>
        {/* Start This Thing */}

    <Navbar bg="light" className='text-white NavMAin'  expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src="https://kih.com.pk/wp-content/uploads/2019/01/cropped-kih-logo.png" alt="Logo Web" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 ml-2 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='text-decoration-none mx-3  text-bg-light' href="#action1" to="/" >Home</Link>
            <Link className='text-decoration-none mx-3 text-bg-light' href="#action1" to="/about">About</Link>
            <Link className='text-decoration-none mx-3 text-bg-light text-bg-light' href="#action1" to="/appointment">Appointment</Link>
            <Link className='text-decoration-none text-bg-light mx-3' href="#action1" to="/contact">Contact</Link>
            <Link className='text-decoration-none  text-bg-light mx-3' href="#action1" to="/login">Login</Link>
            <Link className='text-decoration-none text-bg-light mx-3' href="#action1" to="/signup">Signup</Link>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>

          {/* End This Thing */}
     
    </div>
  )
}

export default Navbar1
