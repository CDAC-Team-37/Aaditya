import React, { useState } from "react";

const ServiceManagement = () => {
  const [services, setServices] = useState([
    { id: 1, name: "Catering", description: "Delicious food for events", price: 500, category: "Catering", status: "Active" },
    { id: 2, name: "Decoration", description: "Beautiful event decoration", price: 300, category: "Decoration", status: "Inactive" },
  ]);

  const [newService, setNewService] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    status: "Active",
  });

  const handleInputChange = (e) => {
    setNewService({ ...newService, [e.target.name]: e.target.value });
  };

  const handleAddService = () => {
    if (!newService.name || !newService.description || !newService.price || !newService.category) {
      alert("Please fill in all fields.");
      return;
    }

    const newServiceWithId = {
      ...newService,
      id: services.length + 1,
      price: parseFloat(newService.price),
    };

    setServices([...services, newServiceWithId]);
    setNewService({ name: "", description: "", price: "", category: "", status: "Active" });
  };

  const handleDeleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  const handleToggleStatus = (id) => {
    setServices(
      services.map((service) =>
        service.id === id ? { ...service, status: service.status === "Active" ? "Inactive" : "Active" } : service
      )
    );
  };

  return (
    <div>
      <h4>Manage Services</h4>
      {/* Add New Service Form */}
      <form className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Service Name"
          value={newService.name}
          onChange={handleInputChange}
          className="form-control mb-2"
        />
        <textarea
          name="description"
          placeholder="Service Description"
          value={newService.description}
          onChange={handleInputChange}
          className="form-control mb-2"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newService.price}
          onChange={handleInputChange}
          className="form-control mb-2"
        />
        <input
          type="text"
          name="category"
          placeholder="Service Category"
          value={newService.category}
          onChange={handleInputChange}
          className="form-control mb-2"
        />
        <select
          name="status"
          value={newService.status}
          onChange={handleInputChange}
          className="form-select mb-2"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button type="button" className="btn btn-success" onClick={handleAddService}>
          Add Service
        </button>
      </form>

      {/* Services Table */}
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.name}</td>
              <td>{service.description}</td>
              <td>{service.price}</td>
              <td>{service.category}</td>
              <td>
                <span className={`badge ${service.status === "Active" ? "bg-success" : "bg-secondary"}`}>
                  {service.status}
                </span>
              </td>
              <td>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => handleToggleStatus(service.id)}
                >
                  Toggle Status
                </button>
                <button
                  className="btn btn-danger btn-sm ms-2"
                  onClick={() => handleDeleteService(service.id)}
                >
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

export default ServiceManagement;
