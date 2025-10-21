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
        .get('http://localhost:3000/api/employees/${id}')
        .then((res) => {
            setEmployee{{
                employeeID: res.data,employeeID,
                name: res.data.name,
                address: res.data.adderss,
nic: res.date.nic
            }};
            
        })
        .catch((err) => {
            console.log('Error from updateDetails', err);

        });
    },
{id});

const onchange =(e) => {
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
    .put('http://localhost:3000/api/employees/${id}', data)
    .then((res) => {
        navigate('/showdetails/${id}');
    });
    .ctch(())
}
}