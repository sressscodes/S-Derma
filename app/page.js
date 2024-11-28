"use client"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Home from '@/components/Home';
import BookAppointment from '@/components/BookAppointment';
import GetRecommendation from '@/components/GetRecommendation';

const App = () => {
  return (
    <Router>
      {/* Header Component */}
      <Header />

      {/* Routes for Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/get-recommendation" element={<GetRecommendation />} />
      </Routes>
    </Router>
  );
};

export default App;