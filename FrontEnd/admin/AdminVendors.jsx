import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminVendors = () => {
    const [vendors, setVendors] = React.useState([]);
    const [formData, setFormData] = useState({
        name: "",
        services: "",
        contact: "",
        email: "",
        location: "",
    });
    const [isEditing, setIsEditing] = useState(false);
    const [editVendorId, setEditVendorId] = useState(null);

    // Fetch vendors from API
    useEffect(() => {
        fetchVendors();
    }, []);

    const fetchVendors = async () => {
        try {
            const response = await axios.get("/api/vendors");
            setVendors(response.data);
        } catch (error) {
            console.error("Error fetching vendors", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditing) {
                await axios.put(`/api/vendors/${editVendorId}`, formData);
                alert("Vendor updated successfully!");
            } else {
                await axios.post("/api/vendors", formData);
                alert("Vendor added successfully!");
            }
            setFormData({
                name: "",
                services: "",
                contact: "",
                email: "",
                location: "",
            });
            setIsEditing(false);
            fetchVendors();
        } catch (error) {
            console.error("Error saving vendor", error);
        }
    };

    const handleEdit = (vendor) => {
        setFormData(vendor);
        setIsEditing(true);
        setEditVendorId(vendor.id);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this vendor?")) {
            try {
                await axios.delete(`/api/vendors/${id}`);
                alert("Vendor deleted successfully!");
                fetchVendors();
            } catch (error) {
                console.error("Error deleting vendor", error);
            }
        }
    };

    return (
        <div className="container admin-vendors-page my-5">
            <h1 className="text-center mb-4">Manage Vendors</h1>

            {/* Vendor Form */}
            <div className="card p-4 mb-4">
                <h2 className="text-center">{isEditing ? "Edit Vendor" : "Add Vendor"}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label" htmlFor="name">Vendor Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="form-control unique-vendor-input"
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label" htmlFor="services">Service Bundles</label>
                            <input
                                type="text"
                                id="services"
                                name="services"
                                value={formData.services}
                                onChange={handleInputChange}
                                className="form-control unique-vendor-input"
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label" htmlFor="contact">Contact Number</label>
                            <input
                                type="text"
                                id="contact"
                                name="contact"
                                value={formData.contact}
                                onChange={handleInputChange}
                                className="form-control unique-vendor-input"
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="form-control unique-vendor-input"
                                required
                            />
                        </div>
                        <div className="col-md-12 mb-3">
                            <label className="form-label" htmlFor="location">Location</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleInputChange}
                                className="form-control unique-vendor-input"
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        {isEditing ? "Update Vendor" : "Add Vendor"}
                    </button>
                </form>
            </div>

            {/* Vendor List */}
            <div className="card p-4">
                <h2 className="text-center mb-3">Vendor List</h2>
                <table className="table table-striped table-hover">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Services</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Location</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {vendors && Array.isArray(vendors) ? (
  vendors.map((vendor, index) => (
    <tr key={index}>
      <td>{vendor.id}</td>
      <td>{vendor.name}</td>
      <td>{vendor.serviceBundle}</td>
      <td>{vendor.contact}</td>
      <td>
        <button className="btn btn-warning btn-sm">Edit</button>
        <button className="btn btn-danger btn-sm">Delete</button>
      </td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan="5" className="text-center">
      No vendors available.
    </td>
  </tr>
)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminVendors;
