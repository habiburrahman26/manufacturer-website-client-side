import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const menuItem = (
    <>
      <li>
        <NavLink
          to={location.pathname === '/home' ? '/home' : '/'}
          className={({ isActive }) => (isActive ? 'bg-accent text-white' : '')}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? 'bg-accent text-white' : '')}
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/reviews"
          className={({ isActive }) => (isActive ? 'bg-accent text-white' : '')}
        >
          Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactus"
          className={({ isActive }) => (isActive ? 'bg-accent text-white' : '')}
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? 'bg-accent text-white' : '')}
        >
          Login
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 lg:px-10 shadow">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <h3 className="btn btn-ghost normal-case text-xl">Computer-Store</h3>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
    </div>
  );
};

export default Navbar;
