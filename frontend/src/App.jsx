// import React, { useEffect } from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import HomePage from './page/HomePage';
// import LoginPage from './page/LoginPage';
// import SignUpPage from './page/SignUpPage';
// import { useAuthStore } from "./store/useAuthStore";
// import { Loader } from "lucide-react";



// const App = () => {
//   const { authUser , checkAuth, isCheckingAuth } = useAuthStore();
//   useEffect(() => {
//     checkAuth();
//   },[checkAuth]);

//   if (isCheckingAuth && !authUser) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <Loader className="size-10 animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className='flex flex-col items-center justify-start'>
//    <Routes>

//     <Route
//      path='/'
//      element={authUser ? <HomePage/> : <Navigate to="/login"/>}
//     />

//     <Route
//      path="/login"
//      element={authUser ? <LoginPage/> : <Navigate to="/" />}
//      />

//       <Route
//        path="/Signup"
//        element={authUser ? <SignUpPage/> : <Navigate to="/" />}
//       />

// </Routes>
//     </div>
    
   
//   );
// };


// export default App;

import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import SignUpPage from "./page/SignUpPage";
import { useAuthStore } from "./store/useAuthStore";
import { Loader } from "lucide-react";
import Layout from "./Layout/Layout";
import AdminRoute from "./components/AdminRoute";
// import ProblemPage from "./page/ProblemPage";
import AddProblem from "./page/AddProblem";


const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-start ">
      <Toaster />
 <Routes>
  {/* Root path "/" - this was missing */}
  <Route
    path="/"
    element={authUser ? <HomePage /> : <Navigate to="/login" />}
  />

  {/* Authenticated route with nested layout */}
  <Route path="auth/login" element={<Layout />}>
    <Route
      index
      element={authUser ? <HomePage /> : <Navigate to="/login" />}
    />
  </Route>

  {/* Login and Signup */}
  <Route
    path="/login"
    element={!authUser ? <LoginPage /> : <Navigate to="/" />}
  />
  <Route
    path="/signup"
    element={!authUser ? <SignUpPage /> : <Navigate to="/" />}
  />

  {/* Protected route for viewing a problem
  <Route
    path="/problem/:id"
    element={authUser ? <ProblemPage /> : <Navigate to="/login" />}
  /> */}

  {/* Admin-only route */}
  <Route element={<AdminRoute />}>
    <Route
      path="/add-problem"
      element={authUser ? <AddProblem /> : <Navigate to="/" />}
    />
  </Route>
</Routes>

    </div>
  );
};

export default App;