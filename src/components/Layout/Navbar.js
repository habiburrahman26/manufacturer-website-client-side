import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const location = useLocation();
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  if (loading) {
    return <LoadingSpinner />;
  }

  const logOut = () => {
    localStorage.removeItem('accessToken');
    signOut(auth);
    navigate('/login', { replace: true });
  };

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
      {user && (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? 'bg-accent text-white' : ''
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
      {!user && (
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? 'bg-accent text-white' : ''
            }
          >
            Login
          </NavLink>
        </li>
      )}
      {user && (
        <li className='ml-2'>
          <button className="btn btn-secondary btn-outline" onClick={logOut}>
            Sign Out
          </button>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 lg:px-10 shadow">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <h3 className="btn btn-ghost normal-case text-xl">Computer-Store</h3>
      </div>
      <div className="navbar-end">
        <label
          htmlFor="dashboard-drawer"
          className="btn btn-circle swap swap-rotate drawer-button lg:hidden"
        >
          <input type="checkbox" />

          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
    </div>
  );
};

export default Navbar;
