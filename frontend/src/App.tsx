import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Toastify from "./shared/toast/Toastify";
import Home from "./modules/home/Home";
import Login from "./modules/user/Login";
import Navbar from './shared/navigation/Navbar';

const App = () => {
  return (
    <>
      {/* React Toastify */}
      <Toastify/>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
