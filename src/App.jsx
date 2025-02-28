import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/HomePage/HomePage';
import AreaUpload from './components/AreaUpload/AreaUpload';
import SpeciesUpload from './components/SpeciesUpload/SpeciesUpload';
import UserProfile from './components/UserProfile/UserProfile';
import ActivitiesList from './components/ActivitiesList/ActivitiesList';
import ActivitiesUpload from './components/ActivitiesUpload/ActivitiesUpload';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />        
          <Route path="/areaupload" element={<AreaUpload />} />        
          <Route path="/speciesupload" element={<SpeciesUpload />} />    
          <Route path="/user" element={<UserProfile />} />        
          <Route path="/activities" element={<ActivitiesList/>}/>
          <Route path="/uploadactivities" element={<ActivitiesUpload/>}/>          
        </Routes>
      </Router>
    </>
  );
};

export default App;
