const router = require('express').Router();

const {
    getAllThoughts,
    createThought,
    updateThought,
    getThoughtById,
    deleteThought,

} = require('../../controllers/thoughtController');


router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

router.route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);


module.exports = router;