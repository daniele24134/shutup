import React, { useEffect } from 'react';
import { useAppSelector } from '../app/hooks';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ClassNameType } from '../@types';

const NotLogged: React.FC<ClassNameType> = ({ className }) => {
  let navigate = useNavigate();
  const isLogged = useAppSelector((state) => state.user.isLogged);

  useEffect(() => {
    if (isLogged) navigate('/');
  }, [isLogged]);

  return (
    <div className={className}>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default styled(NotLogged)`
  background-color: coral;
  height: 100vh;

  & div {
    height: 100vh;
    background-color: white;
    width: 50vw;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
`;
