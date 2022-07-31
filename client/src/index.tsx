import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/store';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotLogged from './pages/NotLogged';
import { GLobalStyles } from './Global.style';
import Login from './components/Login';
import Signup from './components/Signup';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <GLobalStyles />
          <Routes>
            <Route path='/' element={<App />}></Route>
            <Route path='login' element={<NotLogged />}>
              <Route index element={<Login />} />
              <Route path='signup' element={<Signup />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
