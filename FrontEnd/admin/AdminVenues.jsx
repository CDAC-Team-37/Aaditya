import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminVenues = () => {
  const [venues, setVenues] = useState([
    { id: 1, name: "Royal Palace", location: "Mumbai", capacity: 500 },
    { id: 2, name: "Garden Villa", location: "Pune", capacity: 300 },
  ]);

  const [newVenue, setNewVenue] = useState({
    name: "",
    location: "",
    capacity: "",
  });

  const handleInputChange = (e) => {
    setNewVenue({ ...newVenue, [e.target.name]: e.target.value });
  };

  const handleAddVenue = () => {
    const newVenueWithId = {
      ...newVenue,
      id: venues.length + 1,
      capacity: parseInt(newVenue.capacity),
    };
    setVenues([...venues, newVenueWithId]);
    setNewVenue({ name: "", location: "", capacity: "" });
  };

  const handleDeleteVenue = (id) => {
    setVenues(venues.filter((venue) => venue.id !== id));
  };

  return (
    <div className="container mt-4 admin-venues-page">
      <h2 className="text-center mb-4">Manage Venues</h2>

      {/* Add Venue Form */}
      <div className="card mb-4 shadow-lg admin-add-venue-card">
        <div className="card-body">
          <h4 className="card-title">Add New Venue</h4>
          <form>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="name" className="form-label">
                  Venue Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Enter venue name"
                  value={newVenue.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="location" className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="form-control"
                  placeholder="Enter location"
                  value={newVenue.location}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="capacity" className="form-label">
                  Capacity
                </label>
                <input
                  type="number"
                  id="capacity"
                  name="capacity"
                  className="form-control"
                  placeholder="Enter capacity"
                  value={newVenue.capacity}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleAddVenue}
            >
              Add Venue
            </button>
          </form>
        </div>
      </div>

      {/* Venues List */}
      <div className="card shadow-lg admin-venues-list-card">
        <div className="card-body">
          <h4 className="card-title">Venues List</h4>
          <table className="table table-hover table-bordered mt-3">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Venue Name</th>
                <th>Location</th>
                <th>Capacity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {venues.map((venue) => (
                <tr key={venue.id}>
                  <td>{venue.id}</td>
                  <td>{venue.name}</td>
                  <td>{venue.location}</td>
                  <td>{venue.capacity}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm me-2"
                      onClick={() => handleDeleteVenue(venue.id)}
                    >
                      Delete
                    </button>
                    <button className="btn btn-primary btn-sm">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminVenues;
