 const express = require('express');

 const router = express.Router();

 const Employee = require('../models/employee.js');

 //test

 router.get('/test', (req, res) => res.send('Employee route working..'));


// create (POST)
router.post('/', (req, res) => {
  Employee.create(req.body)
    .then(() => res.json({ msg: 'Employee added successfully..' }))
    .catch(() => res.status(400).json({ msg: 'Employee add failed..' }));
});

// get all (GET)
router.get('/', (req, res) => {
  Employee.find()
    .then(employees => res.json(employees))
    .catch(() => res.status(400).json({ msg: 'No employees found..' }));
});

// get by id (GET)
router.get('/:id', (req, res) => {
  Employee.findById(req.params.id)
    .then(employee => res.json(employee))
    .catch(() => res.status(400).json({ msg: 'No employee found..' }));
});

// update (PUT)
router.put('/:id', (req, res) => {
  Employee.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json({ msg: 'Employee updated successfully..' }))
    .catch(() => res.status(400).json({ msg: 'Employee update failed..' }));
});

// delete (DELETE)
router.delete('/:id', (req, res) => {
  Employee.findByIdAndDelete(req.params.id)
    .then(() => res.json({ msg: 'Employee deleted successfully..' }))
    .catch(() => res.status(400).json({ msg: 'Employee delete failed..' }));
});

 module.exports = router;