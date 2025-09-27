 const express = require('express');

 const router = express.Router();

 const Employee = require('../models/employee.js');

 //test

 router.get('/test', (req, res) => res.send('Employee route working..'));


 module.exports = router;