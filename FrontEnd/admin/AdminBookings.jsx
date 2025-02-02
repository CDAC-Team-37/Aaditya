import React, { useState, useEffect } from "react";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Replace with your API call to fetch bookings
    fetch("/api/bookings")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setBookings(data);
        } else {
          console.error("Invalid bookings data:", data);
        }
      })
      .catch((error) => console.error("Failed to fetch bookings:", error));
  }, []);

  const handleApprove = (bookingId) => {
    // Add functionality to approve booking
    console.log(`Approved booking with ID: ${bookingId}`);
  };

  const handleReject = (bookingId) => {
    // Add functionality to reject booking
    console.log(`Rejected booking with ID: ${bookingId}`);
  };

  const handleDelete = (bookingId) => {
    // Add functionality to delete booking
    console.log(`Deleted booking with ID: ${bookingId}`);
  };

  return (
    <div className="container mt-5 admin-bookings-container">
      <h1 className="text-center mb-4">Manage Bookings</h1>
      <p className="text-muted text-center">View, approve, reject, or delete bookings made by users.</p>
      <table className="table table-hover table-bordered admin-bookings-table">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Booking ID</th>
            <th>User</th>
            <th>Venue</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings && bookings.length > 0 ? (
            bookings.map((booking, index) => (
              <tr key={booking.id} className="booking-row">
                <td>{index + 1}</td>
                <td>{booking.id}</td>
                <td>{booking.userName}</td>
                <td>{booking.venueName}</td>
                <td>{new Date(booking.date).toLocaleDateString()}</td>
                <td>
                  <span
                    className={`badge ${
                      booking.status === "Approved"
                        ? "bg-success"
                        : booking.status === "Pending"
                        ? "bg-warning text-dark"
                        : "bg-danger"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td>
                  {booking.status === "Pending" && (
                    <>
                      <button
                        className="btn btn-success btn-sm me-2 booking-approve-btn"
                        onClick={() => handleApprove(booking.id)}
                      >
                        Approve
                      </button>
                      <button
                        className="btn btn-danger btn-sm me-2 booking-reject-btn"
                        onClick={() => handleReject(booking.id)}
                      >
                        Reject
                      </button>
                    </>
                  )}
                  <button
                    className="btn btn-danger btn-sm booking-delete-btn"
                    onClick={() => handleDelete(booking.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No bookings available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminBookings;
