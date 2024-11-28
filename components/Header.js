import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-slate-700 font-bold text-2xl">
          <span className="text-blue-500">S</span> Derma
        </div>
        {/* Navigation */}
        <nav className="flex gap-8 text-slate-700 text-lg font-medium">
          <Link to="/" className="hover:text-blue-500 transition">
            Home
          </Link>
          <Link to="/book-appointment" className="hover:text-blue-500 transition">
            Book Appointment
          </Link>
          <Link to="/get-recommendation" className="hover:text-blue-500 transition">
            Get Recommendation
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;