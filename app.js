const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const dbConfig = require('./config/database.config.js');
const usersRouter = require('./routes/user.routes.js');

// Database connection
mongoose.connect(dbConfig.url,{ useNewUrlParser: true })
.then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

// Create a new Express Application
const app = express();

// Allow parse requests of content-type - application/json
app.use(bodyParser.json())

// Route definition
app.use('/users', usersRouter);

app.get("/", function(req, res) {
  res.json({message: "Express is up!"});
});

app.listen(3000, function() {
  console.log("Express running");
});
