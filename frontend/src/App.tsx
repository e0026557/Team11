import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Toastify from "./shared/toast/Toastify";
import Home from "./modules/home/Home";
import Login from "./modules/user/Login";
import Layout from './shared/layout/Layout';
import ErrorPage from './shared/error/ErrorPage';
import Register from './modules/user/Register';
import Dashboard from './modules/dashboard/Dashboard';
import Campsites from './modules/campsites/Campsites';
import PermitApplication from './modules/permitApplication/PermitApplication';
import FeedbackForm from './modules/feedback/FeedbackForm';

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
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/reviews' element={<Campsites />} />
            {/* TODO: Replace with feedback module */}
            <Route path='/feedback' element={<FeedbackForm />} /> 
            <Route path='/apply/*' element={<PermitApplication />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
