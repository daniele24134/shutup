import React from 'react';
import { useAppSelector } from '../app/hooks';

export const Dashboard: React.FC = () => {
  const user = useAppSelector((state) => state.user.value);
  return <div>Hi {user.username}</div>;
};
