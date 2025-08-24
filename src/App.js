import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About/About.jsx';
import ContactUs from './pages/ContectUs/index.js';
import Index from './pages/Courses/index.js';
import Login from './pages/Login/index.jsx';
import SignUp from './pages/Sign-Up/index.jsx';
import CardDetail from './pages/Courses/Videocard.jsx';
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Sign-Up" element={<SignUp />} />
          <Route path="/courses" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/card/:id" element={<CardDetail />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
