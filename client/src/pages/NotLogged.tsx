import React, { FormEvent, useState } from 'react';
import { loginAsync } from '../features/user/userSlice';
import { useAppDispatch } from '../app/hooks';

export const NotLogged: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (username && password) dispatch(loginAsync({ username, password }));
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={(e: FormEvent) => handleSubmit(e)}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
          type='text'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          type='password'
        />
        <input type='submit' value='login' />
      </form>
    </div>
  );
};
