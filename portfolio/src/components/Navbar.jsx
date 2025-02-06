import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed w-full bg-white dark:bg-[#292926] shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-lg font-bold text-[#292926] dark:text-[#aee87a]">My Portfolio</h1>
        </div>
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-[#292926] dark:text-[#aee87a] hover:underline">Home</Link>
          <Link to="/about" className="text-[#292926] dark:text-[#aee87a] hover:underline">About</Link>
          <Link to="/software" className="text-[#292926] dark:text-[#aee87a] hover:underline">Software</Link>
          <Link to="/contact" className="text-[#292926] dark:text-[#aee87a] hover:underline">Contact</Link>
          <button
            onClick={toggleDarkMode}
            className="text-[#292926] dark:text-[#aee87a] text-lg"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;