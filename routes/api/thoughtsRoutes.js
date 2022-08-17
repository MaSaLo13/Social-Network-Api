const router = require('express').Router();

const {
    getAllThoughts,
    createThought,
    updateThought,
    getThoughtById,
    deleteThought,
    addReaction,

} = require('../../controllers/thoughtController');


router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

router.route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router.route('/:thoughtId/reactions/')
    .post(addReaction)


module.exports = router;