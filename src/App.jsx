import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About/About.jsx';
import ContactUs from './pages/ContectUs/index';
import Index from './pages/Courses/index';
import Login from './pages/Login/index.jsx';
import SignUp from './pages/Sign-Up/index.jsx';
import CardDetail from './pages/Courses/Videocard.jsx';
import Profile from './pages/Profile/Profile';
import AddCourse from './pages/Profile/Admin/AddCourse.jsx';
import ActiveUsers from './pages/Profile/Admin/ActiveUsers.jsx';
import DeleteCourses from './pages/Profile/Admin/DeleteCourses.jsx';
import UserUpdateForm from './pages/Profile/Admin/UserUpdateForm.jsx';
import Settings from './pages/Profile/Admin/settings.jsx';
import UserComments from './pages/Profile/Admin/UserComments.jsx';
import Resources from './pages/resources/index.jsx';
import Schedule from './pages/schedule/index.jsx';
import Help from './pages/help/index.jsx';
import { DarkModeProvider } from './context/DarkModeContext.jsx';
import Dashboard from './pages/Dashboard/student/index';
import ExploreCourses from './pages/Dashboard/student/exploreCourses/index.jsx';
import Userprofile from './pages/Dashboard/student/userprofile/index.jsx';

function App() {
  return (
    <React.Fragment>
      <DarkModeProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Sign-Up" element={<SignUp />} />
          <Route path="/courses" element={<Index />} />
          <Route path="/managecourses" element={<DeleteCourses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/card/:id" element={<CardDetail />} />
         
          <Route path="/profile" element={<Userprofile />} />
          <Route path="/AddCourse" element={<AddCourse />} />
          <Route path="/ActiveUsers" element={<ActiveUsers />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/updateForm" element={<UserUpdateForm />} />
          <Route path="/Comments" element={<UserComments />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/help" element={<Help />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Explorecourses" element={<ExploreCourses />} />
        </Routes>
        </BrowserRouter>
      </DarkModeProvider>
    </React.Fragment>
  );
}

export default App;
