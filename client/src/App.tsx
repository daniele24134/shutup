import { useAppSelector } from './app/hooks';
import Dashboard from './pages/DashBoard';
import { Navigate } from 'react-router-dom';

function App() {
  const isLogged = useAppSelector((state) => state.user.isLogged);

  return <>{isLogged ? <Dashboard /> : <Navigate to='login' />}</>;
}

export default App;
