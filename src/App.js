import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About/About.jsx';
import ContactUs from './pages/ContectUs/index.js';
import Index from './pages/Courses/index.js';
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/instructors" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
