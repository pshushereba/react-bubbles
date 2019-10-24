import React, {useState} from "react";
import axiosWithAuth from '../utils/axiosAuth.js';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = (props) => {
  const [user, setUser] = useState({});
  // const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
      setUser({...user, [event.target.name]: event.target.value})
  }

  console.log(user);

  const login = (e) => {
      e.preventDefault();
      axiosWithAuth().post('/login', user)
          .then((res) => {
              localStorage.setItem('token', res.data.payload);
              props.history.push('/colors');
          })
          .catch((err) => console.log(err))
  }
  
  return (
      <div>
          <div className="form-container">
              <Form onSubmit={login}>
                  <Form.Group controlId="formBasicEmail">
                      <Form.Label>Username:</Form.Label>
                      <Form.Control 
                          type="text"
                          name="username" 
                          placeholder="Enter Username"
                          value={user.username}
                          onChange={handleChange} />
                      <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                      </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control 
                          type="password"
                          name="password"
                          value={user.password}
                          placeholder="Password"
                          onChange={handleChange} />
                  </Form.Group>
                  <Button variant="primary" type="submit">Submit</Button>
              </Form>
          </div>
      </div>
  )
}

export default Login;