import React from 'react';
import { Link } from 'react-router-dom';
import VendorNavbar from './VendorNavbar';

// import './admin-css/admin.css';

import '../custom.css';
const Vendor = () => {
  return (

    <><VendorNavbar />
    <div className="admin-dashboard">
      <h1>Vendor Dashboard</h1>
      <div className="dashboard-links">
        <Link className="nav-link" to="/Vendor/VendorServices">
          Update Services
        </Link>


        <Link className="nav-link" to="/Vendor/VendorVenues">
          Manage venues
        </Link>


        <Link className="nav-link" to="/Vendor/Vendorbookings">
          Manage bookings
        </Link>

        <Link className="nav-link" to="/Vendor/Vendorusers">
          Client Management
        </Link>
        <Link className="nav-link" to="/Vendor/VendorBills">
          Manage Bills
        </Link>
      </div>
    </div></>
  );
};

export default Vendor;
