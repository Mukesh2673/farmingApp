import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import "@/app/component/auth/Login/style.css"
import Image from 'next/image';
import userAvatar from '@/app/assets/images/user.png'
import { MdEmail } from 'react-icons/md'
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
      <div className='imageWrapper'>
        <Image
                  src={userAvatar}
                  alt="feature1"
                  width={150}
                  height={150}
                />
                </div>

        <Form onSubmit={handleSubmit} className="loginForm">
        <Form.Group controlId="formEmail" className="formGroup">
            <Form.Label>Email address</Form.Label>
            <div className="inputWithIcon">
              <MdEmail className="emailIcon" /> 
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="inputField"
              />
            </div>
          </Form.Group>

          <Form.Group controlId="formPassword" className="formGroup">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="inputField"
            />
          </Form.Group>

          <Button
            variant="dark" // Set the button variant to dark for a black button
            type="submit"
            className="loginSubmitButton mt-3 w-100"
          >
            Login
          </Button>
    
        </Form>
    
      </Card.Body>
    </Card>
  );
};

export default LoginForm;
