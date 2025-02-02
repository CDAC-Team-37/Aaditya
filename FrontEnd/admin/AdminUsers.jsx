import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Supriya", email: "ssb@gmail.com", status:"active "},

    { id: 2, name: "Abhishek", email: "abhi@gmail.com", status: "Inactive" },
  ]);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    status: "Active",
  });

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleAddUser = () => {
    const newUserWithId = {
      ...newUser,
      id: users.length + 1,
    };
    setUsers([...users, newUserWithId]);
    setNewUser({ name: "", email: "", status: "Active" });
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleStatusChange = (id, status) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, status: status === "Active" ? "Inactive" : "Active" } : user
      )
    );
  };

  return (
    <div className="container mt-4 admin-users-page">
      <h2 className="text-center mb-4">Manage Users</h2>

      {/* Add User Form */}
      <div className="card mb-4 shadow-lg admin-add-user-card">
        <div className="card-body">
          <h4 className="card-title">Add New User</h4>
          <form>
            <div className="row">
              <div className="col-md-5 mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Enter user name"
                  value={newUser.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-5 mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={newUser.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-2 mb-3">
                <label htmlFor="status" className="form-label">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  className="form-select"
                  value={newUser.status}
                  onChange={handleInputChange}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleAddUser}
            >
              Add User
            </button>
          </form>
        </div>
      </div>

      {/* Users List */}
      <div className="card shadow-lg admin-users-list-card">
        <div className="card-body">
          <h4 className="card-title">Users List</h4>
          <table className="table table-hover table-bordered mt-3">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span
                      className={`badge ${
                        user.status === "Active"
                          ? "bg-success"
                          : "bg-secondary"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleStatusChange(user.id, user.status)}
                    >
                      Toggle Status
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
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

export default AdminUsers;
