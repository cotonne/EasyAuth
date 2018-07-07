const User = require('../models/user.model.js');

// Create and Save a new User
exports.create = (req, res) => {

  // Validate request
  if(!req.body.username) {
    return res.status(400).send({
      message: "Username can not be empty"
    });
  }

  //Create a user
  const user = new User({
    username: req.body.username, 
    password: req.body.password
  });

  // Save user in the database
  user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });  
};

// Retrieve and return all Users from the database.
exports.findAll = (req, res) => {
    User.find()
    .then(user => {
        res.send(user);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// Find a single User by ObjectID
exports.findOne = (req, res) => {
    User.findById(req.params.id)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with " + req.params.id
            });            
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving user " + req.params.id
        });
    });
};

// Update a user identified by objectID in the request
exports.update = (req, res) => {

  // Validate Request
    if(!req.body.username) {
        return res.status(400).send({
            message: "PUT : User content can not be empty"
        });
    }

    // Find user and update it with the request body
    User.findByIdAndUpdate(req.params.id, {
        username: req.body.username,
        password: req.body.password
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found " + req.params.id
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error updating note with username " + req.params.id
        });
    });
};



// Delete a user with the specified username in the request
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.id)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });
        }
        res.send({message: "User deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.id
        });
    });
};
