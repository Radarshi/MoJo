import React from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './Components/Default.jsx';
import Login from './Components/Login.jsx';
import Signup from './Components/Signup.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signin" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </>
  );
}

export default App;
