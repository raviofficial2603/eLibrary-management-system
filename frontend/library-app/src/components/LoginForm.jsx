import React, { useContext, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import MyNavbar from './MyNavbar'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from './UserContext';

function LoginForm() {
  const [candidate, setCandidate] = useState({});
  const [validated, setValidated] = useState(false);
  const context=useContext(UserContext)
  
  const navigate=useNavigate();
  function changeHandler(event) {
   
    setCandidate((prevCandidate) => ({
      ...prevCandidate,
      [event.target.name]: event.target.value,
    }));
  }
  const [message, setMessage] = useState("      ");
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      validateCandidate(candidate)
    }

    setValidated(true);
  };
  const validateCandidate = async (candidate) => {
    let formField = new FormData()
    
    formField.append('email', candidate.email)
    formField.append('password', candidate.password)
    
    
    var headers = new Headers();
 
  
  
  await axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/login/',
    headers: headers,
    credentials: 'include',
      data: formField
    }).then(response => {
      console.log(response.data);
      setMessage(response.data)
      context.handleLogin()
      console.log('form login form',context.loggedIn)
      navigate('/books')
    }).catch((error) => {
      console.error(error.response);
      
    });
  }
  return (
    <>
    <Container className='shadow-lg mt-5 p-5 w-50'>
    <center><h1>Login Here</h1></center>

      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 " controlId="exampleForm.ControlInput4">
              <Form.Label className="text-dark fw-bold">Email</Form.Label>
              <Form.Control
                required
                type="email"
                value={candidate.email}
                name="email"
                placeholder="Email"
                onChange={changeHandler}
              />
              
              <Form.Control.Feedback type="invalid">
                Please check Email.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput8">
              <Form.Label className="text-dark fw-bold">
                Set Password
              </Form.Label>
              <Form.Control
                required
                type="password"
                onChange={changeHandler}
                name="password"
                value={candidate.password}
                placeholder="Password"
              />
              
            </Form.Group>
      <div>Don't have an account yet? <Link to={'/register'}>Register here</Link></div>
      <p className="text-danger fs-6 text-center fw-bold">{message}</p>
      <Button  variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    </>
  )
}

export default LoginForm
