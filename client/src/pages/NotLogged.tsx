import React, { useState } from 'react';
import { login } from '../features/user/userSlice';
import { useAppDispatch } from '../app/hooks';

export const NotLogged: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <form onSubmit={() => {}}>
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
