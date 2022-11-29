import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Signup({handleShow, show, handleClose, handleLogin, isStudent, setIsStudent}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault()
    
        const userData = {
            username: username,
            password: password,
            password_confirmation: confirmPassword,
            isStudent: isStudent,
        }
       const userType = isStudent ? "student" : "teacher"

        fetch(`/signup${userType}`, {
          method: "POST",
          headers: {
           "Content-Type" : "application/json",
        },
          body: JSON.stringify(userData),
        })
        .then((r) => r.json())
        .then((data) => {handleLogin(data)})
        setTimeout(()=> fetch("/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({username: userData.username,
        password: userData.password, isStudent: userData.isStudent})
        })
        .then((r) => r.json())
        .then((data) => {handleLogin(data)
        }), 2000)
      }


    return(
        <div>
    <Button variant="primary" onClick={handleShow}>Register</Button>

  <Modal show={show}>
    <Modal.Header >
      <Modal.Title>Register</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>  
        <Form.Group controlId="confirm-password">
          <Form.Label> Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            autoFocus
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
        <Button onClick={handleClose}>Close</Button>
         <Button variant="primary" type="submit" >
        Register
      </Button>
      </Form>
    </Modal.Body>
  </Modal>
        </div>
    )
}

export default Signup;