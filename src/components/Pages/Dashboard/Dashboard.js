import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import LoadingSpinner from '../../Shared/LoadingSpinner';

const Dashboard = () => {
  const location = useLocation();
  const [user, loading] = useAuthState(auth);
  const [admin, isLoading] = useAdmin(user);

  if (loading || isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="drawer drawer-mobile mt-1">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {location.pathname === '/dashboard' && (
          <h2 className="text-2xl lg:text-4xl font-semibold text-green-400">
            Welcome to dashboard
          </h2>
        )}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
          {!admin && (
            <>
              <li>
                <NavLink to="myOrders">My Orders</NavLink>
              </li>
              <li>
                <NavLink to="addReview">Add Review</NavLink>
              </li>
            </>
          )}
          {admin && (
            <>
              <li>
                <NavLink to="allUsers">All User</NavLink>
              </li>
              <li>
                <NavLink to="manageAllOrders">Manage All Orders</NavLink>
              </li>
              <li>
                <NavLink to="addProduct">Add Product</NavLink>
              </li>
              <li>
                <NavLink to="manageProducts">Manage Products</NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink to="myProfile">My Profile</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
