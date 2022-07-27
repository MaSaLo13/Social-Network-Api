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

    createUser({ body }, res) {
        User.create(body)
        .then(userData => res.json(userData))
        .catch(err => res.status(400).json(err));
    },

};

module.exports = userController;