import { useAppSelector } from './app/hooks';
import Dashboard from './pages/DashBoard';
import { Navigate } from 'react-router-dom';
import { GLobalStyles } from './Global.style';

function App() {
  const isLogged = useAppSelector((state) => state.user.isLogged);
  console.log(isLogged);
  return (
    <>
      <GLobalStyles />
      {isLogged ? <Dashboard /> : <Navigate to='login' />}
    </>
  );
}

export default App;
