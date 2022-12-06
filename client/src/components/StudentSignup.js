import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function StudentSignup({handleShow, show, handleClose, handleLogin, isStudent, setIsStudent}) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [instrument, setInstrument] = useState("");
    const [city, setCity] = useState(""); 
    const [experience, setExperience] = useState("");
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault()
    
        const userData = {
            name: name,
            age: age,
            city: city,
            instrument: instrument,
            experience: experience,
            username: username,
            password: password,
            password_confirmation: confirmPassword,
            isStudent: isStudent,
        }
      //  const userType = isStudent ? "student" : "teacher"

        fetch('/signupstudent', {
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
    <Button className="home-button" variant="primary" onClick={handleShow}>Reigster as Student</Button>

  <Modal className="signup" show={show}>
    <Modal.Header >
      <Modal.Title>Register</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="age"
            placeholder="Age"
            autoFocus
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="city"
            placeholder="City"
            autoFocus
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="instrument">
          <Form.Label>Instrument</Form.Label>
          <Form.Control
            type="instrument"
            placeholder="Instrument"
            autoFocus
            value={instrument}
            onChange={(e) => setInstrument(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="experience">
          <Form.Label>Experience</Form.Label>
          <Form.Control
            type="experience"
            placeholder="Experience (Number of Years)"
            autoFocus
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </Form.Group>
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

export default StudentSignup;