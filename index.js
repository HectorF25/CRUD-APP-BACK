const express = require("express");
const cors = require("cors");
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const UserRouter = require('./src/routes/user.routes.js');

var corsOptions = {
    origin: process.env.ORIGIN
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// User routes
app.use('/api/users', UserRouter);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

app.listen(5000, () => console.log('Server running at http://localhost:5000'));