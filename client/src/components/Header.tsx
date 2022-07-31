import React from 'react';
import { useAppDispatch } from '../app/hooks';
import { logout } from '../features/user/userSlice';
import styled from 'styled-components';

type HeaderProps = {
  className?: string;
  username: string;
};

const Header: React.FC<HeaderProps> = ({ className, username }) => {
  const dispatch = useAppDispatch();
  return (
    <header className={className}>
      <h3>Hi {username}</h3>
      <h1>Shutup</h1>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </header>
  );
};

export default styled(Header)`
  background: coral;
  background: linear-gradient(0deg, coral 0%, rgba(241, 158, 143, 1) 78%);
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 0 20px 0 20px;
  align-items: center;
  color: white;

  & h1 {
    font-size: 2em;
    font-weight: 700;
  }

  & h3 {
    font-size: 18px;
    text-transform: capitalize;
  }

  & button {
    padding: 5px 8px;
    border-radius: 10px;
    background-color: transparent;
    border: 1.5px solid white;
    color: white;
    font-weight: 700;
    cursor: pointer;
    transition: all 300ms ease;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;
