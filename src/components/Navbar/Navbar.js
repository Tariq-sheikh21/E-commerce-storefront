import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white py-5">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <h1 className="text-xl">E-commerce Store</h1>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block md:inline-block mr-4 transition duration-300 ${
                isActive
                  ? 'text-blue-500 underline'
                  : 'hover:text-blue-500 hover:underline hover:translate-y-0.5'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/men"
            className={({ isActive }) =>
              `block md:inline-block mr-4 transition duration-300 ${
                isActive
                  ? 'text-blue-500 underline'
                  : 'hover:text-blue-500 hover:underline hover:translate-y-0.5'
              }`
            }
          >
            Men's
          </NavLink>
          <NavLink
            to="/women"
            className={({ isActive }) =>
              `block md:inline-block mr-4 transition duration-300 ${
                isActive
                  ? 'text-blue-500 underline'
                  : 'hover:text-blue-500 hover:underline hover:translate-y-0.5'
              }`
            }
          >
            Women's
          </NavLink>
          <NavLink
            to="/kid"
            className={({ isActive }) =>
              `block md:inline-block mr-4 transition duration-300 ${
                isActive
                  ? 'text-blue-500 underline'
                  : 'hover:text-blue-500 hover:underline hover:translate-y-0.5'
              }`
            }
          >
            Kid's
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `block md:inline-block mr-4 transition duration-300 ${
                isActive
                  ? 'text-blue-500 underline'
                  : 'hover:text-blue-500 hover:underline hover:translate-y-0.5'
              }`
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative block md:inline-block mr-4 transition duration-300 ${
                isActive
                  ? 'text-blue-500 underline'
                  : 'hover:text-blue-500 hover:underline hover:translate-y-0.5'
              }`
            }
          >
            <FaShoppingCart />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                {cartCount}
              </span>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
