const { User, Thought } = require('../models');

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

    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
        .select('-__v')
        .then(thoughtData => {
            if (!thoughtData) {
                res.status(404).json({message: 'No thought found with this id'});
                return;
            }
            res.json(thoughtData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    createThought({ body }, res) {
        Thought.create(body)
            .then(thoughtData => res.json(thoughtData))
            .catch(err => res.status(400).json(err));
    },
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(thoughtData => {
            if (!thoughtData) {
                res.status(404).json({ message: 'No thought found with this id' });
                return;
            }
            res.json(thoughtData);
        })
        .catch(err => res.status(400).json(err));
    },
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.id})
        .then((thoughtData) => {
            if (!thoughtData) {
                res.status(404).json({ message: 'No thought with that ID'})
            }
      })
        .catch((err) => res.status(500).json(err));
    },
    addReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.id },
            { $addToSet: { reactions: body } },
            { new: true, runValidators: true }
        )
        .then(thoughtData => {
            if (!thoughtData) {
                res.status(404).json({ message: 'No thought found with this id' });
                return;
            }
            res.json(thoughtData);
        })
        .catch(err => res.status(500).json(err));
    },




};

module.exports = thoughtController;