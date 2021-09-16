import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import "./Login.css";
import {Link} from "react-router-dom";
import { Redirect } from "react-router";
import Dashboard from "../dashboard/Dashboard";

const Log  =Axios.create({
  baseURL:"http://localhost:3001/"
});
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(username + " + " + password);
    Log.post("/login", {
      username: username,
      password: password,
    }).then(res=>{
      console.log(res);
        if(res.status===200){
          localStorage.setItem('token',res.data.token);
          //you can also store user details on local storage if you are willing to use that much space
        }
        else{
          console.log('Incorrect username or password');//Here you cn set state variable which will indicate true or false value of trials and if trial goes false you can display incorrect or logged in using that state variable
        }
    })
  }

  return (
    <div className="Login container bg-dark text-white p-5 mt-5 w-50">
      <h1 className="mt-5">Log In</h1>
      <Form onSubmit={handleSubmit} className="">
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
        <Button variant="warning" className="mt-5" size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
      Don't have an account. <Link to="/signup">Sign Up</Link> now!
    </div>
  );
}
