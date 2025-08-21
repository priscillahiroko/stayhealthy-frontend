import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import AppointmentNotification from './components/AppointmentNotification';

import HomePage from './pages/HomePage';
import DoctorsPage from './pages/DoctorsPage';
import AppointmentsPage from './pages/AppointmentsPage';
import ProfilePage from './pages/ProfilePage';
import FeedbackPage from './pages/FeedbackPage';
import ReviewsPage from './pages/ReviewsPage';

import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <Navigation />
      <AppointmentNotification />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
