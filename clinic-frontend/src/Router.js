import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import DoctorList from './components/DoctorList';
import BookAppointment from './components/BookAppointment';
import AppointmentList from './components/AppointmentList';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/doctors" element={<DoctorList />} />
      <Route path="/book-appointment/:doctorId" element={<BookAppointment />} />
      <Route path="/appointments" element={<AppointmentList />} />
    </Routes>
  );
};

export default AppRoutes;
