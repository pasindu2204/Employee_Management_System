import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateDetails() {
    const [employee, setEmployee] = useState({
        employeeID: '',
        name: '',
        address: '',
        NIC : '',
    });

    const { id} =useParams();
    const navigate = useNavigate();

    useEffect (() => {
        axios
         .get(`http://localhost:3000/api/employees/${id}`)
        .then((res) => {
            setEmployee({
                employeeID: res.data.employeeID,
                name: res.data.name,
                address: res.data.address,
                NIC: res.data.NIC
            });
            
        })
        .catch((err) => {
            console.log('Error from updateDetails', err);

        });
    },
[id]);

const onChange =(e) => {
    console.log(e.target.value);
    setEmployee({ ...employee, [e.target.name]: e.target.value});

};
const onSubmit = (e) => {
    e.preventDefault();

    const data = {
        employeeID: employee.employeeID,
        name: employee.name,
        address: employee.address,
        NIC: employee.NIC,

    };
    axios
    .put(`http://localhost:3000/api/employees/${id}`, data)
    .then((res) => {
        navigate(`/show/${id}`);
    })
    .catch((err) => {
        console.log(`error in update`);

    });
};
return (
    <div>
    <div className='UpdateEmployee'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 m-auto'>
                    <br/>
                    <Link to = '/' className='btn btn-outline-warning float-left'>
                    Show Employee List </Link>
                </div>

            </div>
            <div className='col-md-8 m-auto'>
                <form noValidate onSubmit={onSubmit}>
                    <div className='form-group'>
                        <label htmlFor='title'>Employee ID</label>
                        <input
                        type='text'
                        placeholder='Title of the Employee'
                        name='employeeID'
                         className='form-control'
                         value={employee.employeeID}
                         onChange={onChange}/>
                    </div>
                    <br/>

                    <div className='form-group'>
                        <label htmlFor='title'>name</label>
                        <input
                        type='text'
                        placeholder='name'
                        name='name'
                         className='form-control'
                         value={employee.name}
                         onChange={onChange}/>
                    </div>
                    <br/>
                    <div className='form-group'>
                        <label htmlFor='title'>Address</label>
                        <input
                        type='text'
                        placeholder='address'
                        name='address'
                         className='form-control'
                         value={employee.address}
                         onChange={onChange}/>
                    </div>

                    <br/>
                    <div className='form-group'>
                        <label htmlFor='title'>NIC</label>
                        <input
                        type='text'
                        placeholder='nic'
                        name='NIC'
                         className='form-control'
                         value={employee.NIC}
                         onChange={onChange}/>
                    </div>
                    <br/>
                    <button type='Submit'
                    className='btn btn-outline-info btn-lg btn-block'>
                        Update Employee
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>
)

}
export default UpdateDetails;