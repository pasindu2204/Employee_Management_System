const express = require('express');
const dbconnection = require('./config/db.js');
const routes = require('./routes/employee.js');

const app = express();

//connect db
dbconnection();


app.get('/', (req, res) => res.send('Hello server is running..'));

app.use('/api/employees', routes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));