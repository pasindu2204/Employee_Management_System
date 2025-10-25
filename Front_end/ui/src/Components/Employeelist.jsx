import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeCard from './EmployeeCard.jsx';
import './EmployeeList.css';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autoTable';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  // ✅ Fetch all employees
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/employees/')
      .then((res) => {
        setEmployees(res.data);
        setFilteredEmployees(res.data);
      })
      .catch(() => {
        console.log('Error while getting data');
      });
  }, []);

  // ✅ Filter employees
  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = employees.filter((employee) =>
      employee.name.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredEmployees(filtered);
  }, [searchQuery, employees]);

  // ✅ Delete employee
  const onDelete = (id) => {
    axios
      .delete(`http://localhost:3000/api/employees/${id}`)
      .then(() => {
        const updatedList = employees.filter((employee) => employee._id !== id);
        setEmployees(updatedList);
        setFilteredEmployees(updatedList);
      })
      .catch((err) => {
        console.log('Delete error:', err);
      });
  };

  // ✅ Generate PDF
  const generatePDF = () => {
    const doc = new jsPDF();

    const tableColumn = ['Employee Name', 'NIC'];
    const tableRow = [];

    filteredEmployees.forEach((employee) => {
      const employeeData = [
        employee.name, 
        employee.NIC
      ];
      tableRow.push(employeeData);
    });

    doc.text('Employee List', 14, 15);
    doc.autoTable({
      head: [tableColumn],
      body: tableRow,
      startY: 20,
    });

    doc.save('employee_list.pdf');
  };

  return (
    <div className="show_EmployeeList">
      <div className="container">
        <div className="search-bar">
          <input
            placeholder="Search employee..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="but">
          <button onClick={generatePDF}>
            Download PDF
          </button>
        </div>

        <br />

        <div className="list">
          {filteredEmployees.length > 0
            ? filteredEmployees.map((employee, index) => (
                <EmployeeCard
                  key={index}
                  employee={employee}
                  onDelete={onDelete}
                />
              ))
            : 'No employees found'}
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
