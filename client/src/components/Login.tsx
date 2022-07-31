import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ClassNameType } from '../@types';
import { useAppDispatch } from '../app/hooks';
import { loginAsync } from '../features/user/userSlice';

const Login: React.FC<ClassNameType> = ({ className }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (username && password) {
      dispatch(loginAsync({ username, password }));
    }
    setUsername('');
    setPassword('');
  };
  return (
    <form className={className} onSubmit={(e: FormEvent) => handleSubmit(e)}>
      <h2>Log in with your account</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Username'
        type='text'
        autoComplete='username'
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        type='password'
        autoComplete='current-password'
      />
      <input type='submit' value='login' />
      <p>
        Don't you have an account ? <Link to='signup'>sign up</Link>
      </p>
    </form>
  );
};

export default styled(Login)`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  padding: 10px;
  & h2 {
    margin-bottom: 30px;
    font-size: 2em;
    font-weight: 700;
  }

  & input {
    margin-bottom: 30px;
    border: 0.5px solid rgb(20, 20, 20);
    border-radius: 10px;
    padding: 5px 10px;
  }

  & input[type='submit'] {
    background-color: coral;
    font-weight: 700;
    color: white;
    transition: all 300ms ease;

    &:hover {
      background-color: #fca282;
    }
  }

  & a {
    color: coral;
  }
`;
