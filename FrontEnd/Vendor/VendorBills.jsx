import React, { useState } from "react";
import VendorNavbar from './VendorNavbar';


const BillManagement = () => {
    
  const [bills, setBills] = useState([
    { id: 1, clientName: "Supriya", totalBill: 1000, billPaid: 400, balance: 600 },
    { id: 2, clientName: "Aditya", totalBill: 1500, billPaid: 1500, balance: 0 },
  ]);

  const [newBill, setNewBill] = useState({
    clientName: "",
    totalBill: "",
    billPaid: "",
  });
  
  const handleInputChange = (e) => {
    setNewBill({ ...newBill, [e.target.name]: e.target.value });
  };

  const handleAddBill = () => {
    if (!newBill.clientName || !newBill.totalBill || !newBill.billPaid) {
      alert("Please fill in all fields.");
      return;
    }

    const balance = parseFloat(newBill.totalBill) - parseFloat(newBill.billPaid);

    const newBillWithId = {
      ...newBill,
      id: bills.length + 1,
      totalBill: parseFloat(newBill.totalBill),
      billPaid: parseFloat(newBill.billPaid),
      balance,
    };

    setBills([...bills, newBillWithId]);
    setNewBill({ clientName: "", totalBill: "", billPaid: "" });
  };

  const handleUpdateBill = (id, updatedAmount) => {
    setBills(
      bills.map((bill) =>
        bill.id === id
          ? { ...bill, billPaid: updatedAmount, balance: bill.totalBill - updatedAmount }
          : bill
      )
    );
  };

  const handleDeleteBill = (id) => {
    setBills(bills.filter((bill) => bill.id !== id));
  };

  return (
    
    
    <div>
      <h4>Manage Bills</h4>
      {/* Add New Bill Form */}
      <form className="mb-4">
        <input
          type="text"
          name="clientName"
          placeholder="Client Name"
          value={newBill.clientName}
          onChange={handleInputChange}
          className="form-control mb-2"
        />
        <input
          type="number"
          name="totalBill"
          placeholder="Total Bill"
          value={newBill.totalBill}
          onChange={handleInputChange}
          className="form-control mb-2"
        />
        <input
          type="number"
          name="billPaid"
          placeholder="Amount Paid"
          value={newBill.billPaid}
          onChange={handleInputChange}
          className="form-control mb-2"
        />
        <button type="button" className="btn btn-success" onClick={handleAddBill}>
          Add Bill
        </button>
      </form>

      {/* Bills Table */}
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Client Name</th>
            <th>Total Bill</th>
            <th>Amount Paid</th>
            <th>Balance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <tr key={bill.id}>
              <td>{bill.id}</td>
              <td>{bill.clientName}</td>
              <td>{bill.totalBill}</td>
              <td>
                <input
                  type="number"
                  value={bill.billPaid}
                  onChange={(e) => handleUpdateBill(bill.id, parseFloat(e.target.value))}
                  className="form-control"
                />
              </td>
              <td>{bill.balance}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteBill(bill.id)}
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

export default BillManagement;
