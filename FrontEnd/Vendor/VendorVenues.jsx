
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";

const VenueManagement = () => {
  const [venues, setVenues] = useState([
    { id: 1, clientId: 1, venueName: "Venue A", location: "Navi Mumbai", capacity: 500 },
    { id: 2, clientId: 2, venueName: "Venue B", location: "Goa", capacity: 2000 },
  ]);

  const [newVenue, setNewVenue] = useState({
    clientId: "",
    venueName: "",
    location: "",
    capacity: "",
  });

  const handleInputChange = (e) => {
    setNewVenue({ ...newVenue, [e.target.name]: e.target.value });
  };

  const handleAddVenue = () => {
    setVenues([...venues, { ...newVenue, id: venues.length + 1 }]);
    setNewVenue({ clientId: "", venueName: "", location: "", capacity: "" });
  };

  return (
    <div>
      
      <h4>Manage Venues</h4>
      <form className="mb-4">
        <input
          type="text"
          name="venueName"
          placeholder="Venue Name"
          value={newVenue.venueName}
          onChange={handleInputChange}
          className="form-control mb-2"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newVenue.location}
          onChange={handleInputChange}
          className="form-control mb-2"
        />
        <input
          type="number"
          name="capacity"
          placeholder="Capacity"
          value={newVenue.capacity}
          onChange={handleInputChange}
          className="form-control mb-2"
        />
        <button
          type="button"
          className="btn btn-success"
          onClick={handleAddVenue}
        >
          Add Venue
        </button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Client ID</th>
            <th>Venue Name</th>
            <th>Location</th>
            <th>Capacity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {venues.map(venue => (
            <tr key={venue.id}>
              <td>{venue.id}</td>
              <td>{venue.clientId}</td>
              <td>{venue.venueName}</td>
              <td>{venue.location}</td>
              <td>{venue.capacity}</td>
              <td>
                <button className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VenueManagement;

