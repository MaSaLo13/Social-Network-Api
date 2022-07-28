const { User, Thought} = require('../models');

const thoughtController = {

    // GET /api/thoughts
    getAllThoughts(req, res) {
        Thought.find({})
        .select('-__v')
        .then(thoughtData => res.json(thoughtData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    },





};

module.exports = thoughtController;