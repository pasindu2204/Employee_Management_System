const express = require('express');
const dbconnection = require('./config/db.js');
const routes = require('./routes/employee.js');
const router = require('./routes/employee.js');
const employee = require('./models/employee.js');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

app.use(cors({origin:true , Credentials:true}));

//connect db
dbconnection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello server is running..'));

app.use('/api/employees', routes);

router.post('/', (req, res) => {

    employee.create(req.body)
    .then(() => res.json({ msg: 'Employee adding sucessfully..' }))
    .catch(() => res.status(400).json({ msg: 'Error adding employee' }));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));