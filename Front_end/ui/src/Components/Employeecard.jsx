import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';


const EmployeeCard = ({employee, onDelete }) => {

const handleDelete = () => {
  onDelete(employee._id);
}
  return (
    
      <div className="card mb-3">
        <img src="https://tse3.mm.bing.net/th/id/OIP.VOlMLrq-qahJWSsR4QJUQwHaE7?pid=Api&P=0&h=220" className="card-img-top" alt=".." 
        style={{ height: '200px',
      width: '100%',
      objectFit: 'cover'}}/>
        <div className="card-body">
          <h5 className="card-title">{employee.name}</h5>
          <p className="card-text">
           {employee.employeeID}<br/>
           {employee.address}<br/>
           {employee.NIC}<br/>
          </p>
          <p className="card-text">
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </p>
         
        </div>
        <div className='card_action'>
 <button className='delete' onClick={handleDelete} >Delete</button>
 <Link className='btn btn-outline-warning float-right' to={`/show/${employee._id}`}>Details</Link>
        </div>
      </div>
    
  );
}

export default EmployeeCard;
