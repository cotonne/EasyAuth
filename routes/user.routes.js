var express = require('express');
var router = express.Router();

var user = require('../controllers/user.controller.js');

//Create a new user
router.post('/', user.create);

// Retrieve all users
router.get('/', user.findAll);

// Retrieve a single user by objectID
router.get('/:id', user.findOne);

// Update a user by objectID
router.put('/:id', user.update);

// Delete a user by objectID
router.delete('/:id', user.delete);

module.exports = router;
 
