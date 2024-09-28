import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import "@/app/component/auth/Login/style.css"
import Image from 'next/image';
import userAvatar from '@/app/assets/images/user.png'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordLine } from "react-icons/ri";

const LoginForm: React.FC = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login credentials:', { email, password });
    // Perform login logic here (e.g., API call)
  };

  return (
    <Card className="loginCard">
      <Card.Body>


        <Form onSubmit={handleSubmit} className="loginForm">
        <Form.Group controlId="formEmail" className="formGroup">
            <Form.Label>Password</Form.Label>
            <div className="inputWithIcon">
              <RiLockPasswordLine className="emailIcon" /> 
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="inputField"
              />
            </div>
          </Form.Group>

          <Form.Group controlId="formPassword" className="formGroup">
            <Form.Label>Confirm Password</Form.Label>
            <div className="inputWithIcon">
              <RiLockPasswordLine className="emailIcon" /> 
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={password}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="inputField"
              />
            </div>
          </Form.Group>

          <Button
            variant="dark" // Set the button variant to dark for a black button
            type="submit"
            className="loginSubmitButton mt-3 w-100"
          >
            Save
          </Button>
    
        </Form>
    
      </Card.Body>
    </Card>
  );
};

export default LoginForm;
