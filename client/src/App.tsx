import React, { useEffect } from 'react';
import './App.css';
import { useAppSelector } from './app/hooks';
import { Dashboard } from './pages/DashBoard';
import { NotLogged } from './pages/NotLogged';

function App() {
  const isLogged = useAppSelector((state) => state.user.isLogged);

  return isLogged ? <Dashboard /> : <NotLogged />;
}

export default App;
