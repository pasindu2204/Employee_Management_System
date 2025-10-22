import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function ShowEmployeeDetails() {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/employees/${id}`)
      .then((res) => {
        setEmployee(res.data);
      })
      .catch(() => {
        console.log('Error from ShowEmployeeDetails');
      });
  }, [id]);

  const TableItem = (
    <div className="col-md-10 m-auto">
        <table className="table table-hover table-dark">
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>ID</td>
              <td>{employee.employeeID}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>NAME</td>
              <td>{employee.name}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>ADDRESS</td>
              <td>{employee.address}</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>NIC</td>
              <td>{employee.NIC}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
  );

  return (
    <div className="ShowEmployeeDetails">
      <div className="col-md-10 m-auto">
        <br />
        <Link to="/" className="btn btn-outline-danger float-right">
          Back to main
        </Link>
      </div>

      <br />
      <div className="col-md-8 m-auto text-center">
        <h1 className="display-6 fw-bold">Employee Details</h1>
        <p>This is full details of the employee</p>
      </div>

      <div className="col-md-10 m-auto">{TableItem}
      </div>

      <div className="col-md-10 m-auto">
  <Link
    to={`/update/${employee._id}`}  // also fix route name
    className="btn btn-outline-info btn-lg btn-block d-flex justify-content-center"
  >
    Edit Employee
  </Link>
</div>
    </div>
  );
}

export default ShowEmployeeDetails;
