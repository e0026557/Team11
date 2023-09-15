import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Toastify from "./shared/toast/Toastify";
import Home from "./modules/home/Home";
import Login from "./modules/user/Login";
import Layout from './shared/layout/Layout';
import ErrorPage from './shared/error/ErrorPage';

const App = () => {
  return (
    <>
      {/* React Toastify */}
      <Toastify />
      <Router>
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
