
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";

const ClientManagement = () => {
  const [clients, setClients] = useState([
    { id: 1, name: "Supriya", email: "ssb@gmail.com", phone: "9922448822" },
  
  ]);
  
  const [newClient, setNewClient] = useState({ name: "", email: "", phone: "" });

  const handleInputChange = (e) => {
    setNewClient({ ...newClient, [e.target.name]: e.target.value });
  };

  const handleAddClient = () => {
    setClients([...clients, { ...newClient, id: clients.length + 1 }]);
    setNewClient({ name: "", email: "", phone: "" });
  };

  const handleDeleteClient = (id) => {
    setClients(clients.filter(client => client.id !== id));
  };

  return (
    <div>
      <h4>Manage Clients</h4>
      <form className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Client Name"
          value={newClient.name}
          onChange={handleInputChange}
          className="form-control mb-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Client Email"
          value={newClient.email}
          onChange={handleInputChange}
          className="form-control mb-2"
        />
        <input
          type="text"
          name="phone"
          placeholder="Client Phone"
          value={newClient.phone}
          onChange={handleInputChange}
          className="form-control mb-2"
        />
        <button
          type="button"
          className="btn btn-success"
          onClick={handleAddClient}
        >
          Add Client
        </button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => handleDeleteClient(client.id)}>
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

export default ClientManagement;

