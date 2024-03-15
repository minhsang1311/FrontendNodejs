import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import { ForgotPassword } from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import UserInfo from './pages/UserInfo';


function App() {
  return (
      <><BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Login />} />   
          <Route path='login' element={<Login />} />
          <Route path='user-info' element={<UserInfo />} />
          <Route path='sign-up' element={<SignUp/>} />
          <Route path='forgot-password' element={<ForgotPassword />} />
        </Route>
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
