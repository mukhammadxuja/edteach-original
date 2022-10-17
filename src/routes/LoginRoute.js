import React, { useState } from 'react'
import { Redirect } from "react-router-dom"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import signupUser from '../use_cases/signupUser';
import loginUser from '../use_cases/loginUser';
import CenteredContainer from '../view_components/CenteredContainer';
import loginImg from "./img/loginImg.png"
const handleSubmit = (event, { email, password, authFn, successCallback }) => {
  event.preventDefault();
  authFn({ email, password })
    .then(user => successCallback(user))
}

const SignupForm = ({ onUserChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Form className="mb-5" onSubmit={f => handleSubmit(f, { email, password, authFn: signupUser, successCallback: onUserChange })}>
      <FormGroup>
        <Input id="email" placeholder="Email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Input type="password" placeholder="Password"  name="password" value={password} onChange={e => setPassword(e.target.value)} />
      </FormGroup>
      <Button color="primary">Ro'yhatda o'tish</Button>
    </Form>
  );
}

const LoginForm = ({ onUserChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Form className="mb-5" onSubmit={f => handleSubmit(f, { email, password, authFn: loginUser, successCallback: onUserChange })}>
      <FormGroup>
        <Input id="email" placeholder="Email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Input type="password" placeholder="Password"  name="password" value={password} onChange={e => setPassword(e.target.value)} />
      </FormGroup>
      <Button color="primary">Kirish</Button>
    </Form>
  );
}

const LoginRoute = props => {
  const [isExistingUser, setIsExistingUser] = useState(false);
  const [user, setUser] = useState(null);

  const toggleForm = event => {
    event.preventDefault();
    setIsExistingUser(!isExistingUser);
  }

  if (user) {
    return <Redirect to='/games' />
  } else if (isExistingUser) {
    return (
      <div className='login-box'>
        <div className='logo-box'>
          <h1>edTeach</h1>
        </div>
        <CenteredContainer maxWidth={400} verticalCentered>
        <h1>Ro'yhatdan o'tish!</h1>
        <SignupForm onUserChange={setUser} />
        <div>
          <p>Hisobingiz bormi?</p> 
          <span color="link" className='span' onClick={toggleForm}>Login</span>
        </div> 
      </CenteredContainer>
      </div>
    );

  } else {
    return (
      <div className='login-box'>
        <div className='logo-box'>
          <h1>edTeach</h1>
        </div>
        <CenteredContainer maxWidth={400} verticalCentered>
        <h1>edTeach ga kiring!</h1>
        <LoginForm onUserChange={setUser} />
        <div>
          <p>Hisobingiz yo'qmi?</p> 
          <span color="link" className='span'  onClick={toggleForm}>Ro'yhatdan o'tish!</span>
        </div>
      </CenteredContainer>
      </div>
    );
  }
}

export default LoginRoute
