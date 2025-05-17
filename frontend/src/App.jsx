import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
import SignUpPage from './page/page/SignUpPage';

const App = () => {

  let authUser = null;

  return (
    <div className='flex flex-col items-center justify-start'>
   <Routes>

    <Route
     path='/'
     element={authUser ? <HomePage/> : <Navigate to="/login"/>}
    />

    <Route
     path="/login"
     element={authUser ? <LoginPage/> : <Navigate to="/" />}
     />

      <Route
       path="/Signup"
       element={authUser ? <SignUpPage/> : <Navigate to="/" />}
      />

</Routes>
    </div>
    
   
  );
};


export default App;