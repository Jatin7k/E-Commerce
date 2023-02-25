import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/home';
import Login from './Components/login';
import Register from './Components/register';
import Dashboard from './Components/dashboard'
import Profile from './Components/Profile/Profile.js';

function App() {
  return (
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
  </Routes>
  );
}

export default App;
