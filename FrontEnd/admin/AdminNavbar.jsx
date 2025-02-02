import React from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark admin-navbar shadow-lg">
      <div className="container-fluid">
        {/* Navbar Brand */}
        <Link className="navbar-brand admin-navbar-brand" to="/admin">
          MarryMates Admin
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminNavbarContent"
          aria-controls="adminNavbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="adminNavbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 admin-navbar-links">
            {/* Dashboard */}
            <li className="nav-item">
              <NavLink
                className="nav-link admin-dashboard-link"
                activeClassName="active"
                to="/admin"
              >
                Dashboard
              </NavLink>
            </li>

            {/* Manage Users */}
            <li className="nav-item">
              <NavLink
                className="nav-link admin-users-link"
                activeClassName="active"
                to="/admin/users"
              >
                Manage Users
              </NavLink>
            </li>

            {/* Manage Vendors */}
            <li className="nav-item">
              <NavLink
                className="nav-link admin-vendors-link"
                activeClassName="active"
                to="/admin/vendors"
              >
                Manage Vendors
              </NavLink>
            </li>

            {/* Manage Venues */}
            <li className="nav-item">
              <NavLink
                className="nav-link admin-venues-link"
                activeClassName="active"
                to="/admin/venues"
              >
                Manage Venues
              </NavLink>
            </li>

            {/* Reports */}
            <li className="nav-item">
              <NavLink
                className="nav-link admin-reports-link"
                activeClassName="active"
                to="/admin/reports"
              >
                Reports
              </NavLink>
            </li>
          </ul>

          {/* Logout Button */}
          <form className="d-flex">
            <button
              type="button"
              className="btn btn-outline-danger admin-logout-btn"
            >
              Logout
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
