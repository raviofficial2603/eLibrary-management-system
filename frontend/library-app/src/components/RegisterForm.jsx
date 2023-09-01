import React, { useEffect } from 'react'
import MyNavbar from './MyNavbar'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Container, Spinner, Toast } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import CSRFToken from './CSRFToken';

function RegisterForm() {
  useEffect(()=>{
    axios({
      method: 'get',
      url: 'http://127.0.0.1:8000/',
      
      }).then(response => {
        console.log(response.data);
      })
      
      .catch((error) => {
        console.error(error.response);
        
      });
  },[])
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [candidate, setCandidate] = useState({});
  const [message, setMessage] = useState("      ");
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      createCandidate(candidate)
    }

    setValidated(true);
  };
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
  const [showRegister, setShowRegister] = useState(true);
  function changeHandler(event) {
    setShowRegister(true);
    setCandidate((prevCandidate) => ({
      ...prevCandidate,
      [event.target.name]: event.target.value,
    }));
  }
  const createCandidate = async (candidate) => {
    let formField = new FormData()
    formField.append('name', candidate.name)
    formField.append('email', candidate.email)
    formField.append('address', candidate.address)
    formField.append('phone', candidate.mobile)
    formField.append('college', candidate.college)
    formField.append('password', candidate.password)
    console.log(formField.getAll('phone'));
    
    var headers = new Headers();
 
  
  
  await axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/register/',
    headers: headers,
    credentials: 'include',
      data: formField
    }).then(response => {
      console.log(response.data);
      setMessage(response.data)
      navigate('/books')
    })
    
    .catch((error) => {
      console.error(error.response);
      
    });
  }
  const csrftoken = getCookie('csrftoken');
  return (
    <>
      <Container className='shadow-lg mt-5 p-5'>
      <center><h1>Register Here</h1></center>
        
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="mx-auto p-3 w-50"
        >
          <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
          <div style={{ height: "60vh" }} className="overflow-auto mb-3">


            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput3">
              <Form.Label className="text-dark fw-bold">Fullname</Form.Label>
              <Form.Control
                required
                minLength={3}
                value={candidate.fullName}
                name="name"
                type="text"
                placeholder="Fullname"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="valid">
                Looks good
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please check Full Name.
              </Form.Control.Feedback>
            </Form.Group>

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
              <Form.Control.Feedback type="valid">
                Looks good
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please check Email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput5">
              <Form.Label className="text-dark fw-bold">Mobile</Form.Label>
              <Form.Control
                minLength={10}
                maxLength={10}
                required
                type="number"
                value={candidate.mobile}
                name="mobile"
                placeholder="Mobile"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="valid">
                Looks good
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please check MobileNumber.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput6">
              <Form.Label className="text-dark fw-bold">Address</Form.Label>
              <Form.Control
                required
                as="textarea"
                value={candidate.address}
                name="address"
                rows={3}
                placeholder="Your address"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="valid">
                Looks good
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please check Address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label className="text-dark fw-bold">College</Form.Label>
              <Form.Control
                minLength={3}
                required
                type="text"
                name="college"
                value={candidate.firstName}
                onChange={changeHandler}
                placeholder="College"
              />
              <Form.Control.Feedback type="valid">
                Looks good
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please check First Name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput8">
              <Form.Label className="text-dark fw-bold">
                Set Password
              </Form.Label>
              <Form.Control
                required
                type="password"
                minLength={4}
                onChange={changeHandler}
                name="password"
                value={candidate.password}
                placeholder="Set Password"
              />
              <Form.Control.Feedback type="valid">
                Looks good
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                <p>
                  {" "}
                  Please check Password(password should atleast 4 characters).{" "}
                </p>
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div>Already have an account? <Link to={'/login'}>Login here</Link></div>
          <Form.Group className="mx-auto" controlId="exampleForm.ControlInput9">
            <p className="text-danger fs-6 text-center fw-bold">{message}</p>
            <Button
              type="submit"
              disabled={!showRegister}
              className="btn-lg w-50 mt-5 text-black"
              variant="warning"
            >
              {showRegister ? "Register" : "Please wait..."}
              {!showRegister && <Spinner animation="border" variant="dark" />}
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  )
}

export default RegisterForm
