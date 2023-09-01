import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import UserContext from './UserContext';

function MyNavbar() {
  const context=useContext(UserContext)
  const [isLoggedIn,setIsLoggedIn]=useState(context.loggedIn)
  console.log('from nav bar',isLoggedIn)
  function logout(params) {
    axios({
      method: 'get',
      url: 'http://127.0.0.1:8000/logout',
      
      }).then(response => {
        console.log(response.data);
        setIsLoggedIn(false)
        context.handleLogout()
      })
      
      .catch((error) => {
        console.error(error.response);
        
      });
  }
    useEffect(()=>{
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/isLoggedIn',
            
            }).then(response => {
              console.log(response.data);
              setIsLoggedIn(response.data===true)
            })
            
            .catch((error) => {
              console.error(error.response);
              
            });
    },[])
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/">eLibrary</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 me-3"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            {isLoggedIn?<Button  variant="primary" onClick={logout}>
        Logout
      </Button>:<Nav.Link className='btn btn-outline-success btn-success' href="/login">Login</Nav.Link>}
            {isLoggedIn?null:<Nav.Link className='btn btn-warning' href="/register">Register</Nav.Link>}
            
            
           
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
