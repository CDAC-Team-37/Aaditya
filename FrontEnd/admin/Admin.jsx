import React from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';

// import './admin-css/admin.css';

import '../custom.css';
const Admin = () => {
  return (

    <><AdminNavbar />
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-links">
        <Link className="nav-link" to="/admin/vendors">
          Manage vendors
        </Link>


        <Link className="nav-link" to="/admin/venues">
          Manage venues
        </Link>


        <Link className="nav-link" to="/admin/bookings">
          Manage bookings
        </Link>

        <Link className="nav-link" to="/admin/users">
          User Management
        </Link>
        <Link className="nav-link" to="/admin/reports">
          Generate Reports
        </Link>
      </div>
    </div></>
  );
};

export default Admin;
