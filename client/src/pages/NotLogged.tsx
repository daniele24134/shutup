import React, { FormEvent, useEffect, useState } from 'react';
import { loginAsync } from '../features/user/userSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useNavigate } from 'react-router-dom';

export const NotLogged: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  const isLogged = useAppSelector((state) => state.user.isLogged);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (username && password) {
      dispatch(loginAsync({ username, password }));
    }
    setUsername('');
    setPassword('');
  };

  useEffect(() => {
    if (isLogged) navigate('/');
  }, [isLogged]);

  return (
    <div>
      <form onSubmit={(e: FormEvent) => handleSubmit(e)}>
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
      </form>
    </div>
  );
};
