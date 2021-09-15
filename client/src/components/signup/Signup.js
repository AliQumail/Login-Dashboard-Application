import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import "./Signup.css";

export default function Signup() {
  const [firstname,setFirstname] = useState("");
  const [lastname,setLastname] = useState("");
  const [email,setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age,setAge] = useState();
  const [homeAddress,setHomeAddress] = useState("");
  const [currentAddress,setCurrentAddress] = useState("");
  const [gender,setGender] = useState("");
  const [nationality,setNationality] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    Axios.post("http://localhost:3001/signup", {
       firstname: firstname,
       lastname:lastname,
       email:email,
       username:username,
       password:password,
       age:age, 
       homeAddress:homeAddress,
       currentAddress,
       gender:gender,
       nationality:nationality
       
    });
  }

  return (
    <div className="Login container bg-dark text-white p-5 mt-5 w-50">
      <h1 className="mt-5">Sign Up</h1>
      <Form onSubmit={handleSubmit} className="">
 
    {/* first name  */}
      <Form.Group size="lg" controlId="email">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </Form.Group>


        <Form.Group size="lg" controlId="email">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>


        <Form.Group size="lg" controlId="email">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>



        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>



        <Form.Group size="lg" controlId="email">
          <Form.Label>Age</Form.Label>
          <Form.Control
            autoFocus
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>


        <Form.Group size="lg" controlId="email">
          <Form.Label>Home address</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={homeAddress}
            onChange={(e) => setHomeAddress(e.target.value)}
          />
        </Form.Group>


        <Form.Group size="lg" controlId="email">
          <Form.Label>Current Address</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={currentAddress}
            onChange={(e) => setCurrentAddress(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="email">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="email">
          <Form.Label>Nationality</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          />
        </Form.Group>



       



      
        <Button variant="warning" className="mt-5" size="lg" type="submit" disabled={!validateForm()}>
          Sign Up
        </Button>
      </Form>
     
    </div>
  );
}