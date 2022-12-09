import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Login({handleShow, show, handleClose, handleLogin, currentUser, setCurrentUser, isStudent, setIsStudent}){

  const [loginData, setLoginData] = useState({username: "", password: ""})
  const [errors, setErrors] = useState([]);

  const history = useHistory();

  const handleOnChange = (event) => {
    const name = event.target.name
    let value = event.target.value

    setLoginData({...loginData, [name]: value})
  }

  const handleLogOut = (e) => {
    e.preventDefault();
      fetch(`/logout`, {
        method:"DELETE"
      })
      .then(res =>{
        if(res.ok){
          history.push('/')
          setCurrentUser(null)
        }
      })
    }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    
    fetch("/login", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({...loginData, isStudent: isStudent})
    })
    .then((res) => {
      if(res.ok) {
        res.json().then(user => {
          handleLogin(user)
      })
      }else{res.json().then(json => setErrors(json.errors))} 
    })
  }

    return( 
    <>
       {!currentUser? <Button className="home-button" variant="primary" onClick={handleShow}>
      Login</Button> : <Button className="home-button" variant="primary" onClick={handleLogOut}>
      Logout</Button>}
      <div>
        <Modal className="login-form" show={show} onHide={handleClose}>
          <Modal.Header >
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleOnSubmit}>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="username"
                  name="username"
                  placeholder="Username"
                  value={loginData.username}
                  onChange={handleOnChange}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handleOnChange}
                  autoFocus
                />
              </Form.Group>
              <Form.Check 
                inline
                type="checkbox"
                label="Student"
                value={isStudent}
                onClick={(e) => setIsStudent(true)}
            />
             <Form.Check 
                inline
                type="checkbox"
                label="Instructor"
                value={isStudent}
                onClick={(e) => setIsStudent(false)}
            />
              <Button className = "closeLog"  onClick={handleClose}>
              Close
            </Button>
              <Button className = "logSubmit" variant="primary" type='submit' >
              Login
            </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
       
          </Modal.Footer>
        </Modal>
        </div>
      </>



    )
}


export default Login;