const { User, Thought } = require('../models');

const userController = {

    // GET /api/users
    getAllUsers(req, res) {
        User.find({})
        .select('-__v')
        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    },

    getUserById({ params }, res) {
      User.findOne({ _id: params.id })
      .select('-__v')
      .then(userData => {
          if (!userData) {
              res.status(404).json({message: 'No user found with this id'});
              return;
          }
          res.json(userData);
      })
      .catch(err => {
          console.log(err);
          res.status(400).json(err);
      });
  },

    createUser({ body }, res) {
        User.create(body)
        .then(userData => res.json(userData))
        .catch(err => res.status(400).json(err));
    },

    updateUser({ params, body }, res) {
      User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
      .then(userData => {
          if (!userData) {
              res.status(404).json({ message: 'No user found with this id' });
              return;
          }
          res.json(userData);
      })
      .catch(err => res.status(400).json(err));
  },

};

module.exports = userController;