import React, { useState } from 'react';
import './InsertEmployee.css';
import axios from 'axios';

const InsertEmployee = () => {
  const [EmployeeData, setEmployeeData] = useState({
    employeeID: '',
    name: '',
    address: '',
    NIC: '',
  });

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...EmployeeData,
      [name]: value,
    });
    console.log(EmployeeData);
  };

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3000/api/employees', EmployeeData)
      .then(() => {
        alert('Employee added successfully!');
        setEmployeeData({
          employeeID: '',
          name: '',
          address: '',
          NIC: '',
        });
      })
      .catch((error) => {
        console.error('Error submitting data:', error);
        alert('Failed to add employee');
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Employee Form</h2>

        <label htmlFor="employeeID">Employee ID</label>
        <input
          type="text"
          id="employeeID"
          name="employeeID"
          placeholder="Enter Employee ID"
          value={EmployeeData.employeeID}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name"
          value={EmployeeData.name}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Enter Address"
          value={EmployeeData.address}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="NIC">NIC</label>
        <input
          type="text"
          id="NIC"
          name="NIC"
          placeholder="Enter NIC"
          value={EmployeeData.NIC}
          onChange={handleChange}
          required
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InsertEmployee;
