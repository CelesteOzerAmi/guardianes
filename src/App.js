import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />        
        </Routes>
      </Router>
    </>
  );
};

export default App;
