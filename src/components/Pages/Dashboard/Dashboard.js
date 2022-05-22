import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile mt-1">
      <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        <p>Welcome to Dashboard</p>
        <Outlet />
      </div>
      <div class="drawer-side">
        <label htmlFor="dashboard-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
          <li>
            <NavLink to="myOrder">My Orders</NavLink>
          </li>
          <li>
            <NavLink to="addReview">Add Review</NavLink>
          </li>
          <li>
            <NavLink to="myProfile">My Profile</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
