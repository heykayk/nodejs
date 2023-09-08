const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/:_id/edit', courseController.edit);
router.get('/create', courseController.create);
router.get('/:slug', courseController.show);
router.post('/handle-form-actions', courseController.handleFromActions);
router.post(
    '/handle-trash-form-actions',
    courseController.handleTrashFromActions,
);
router.post('/store', courseController.store);
router.put('/:_id', courseController.update);
router.patch('/:_id/restore', courseController.restore);
router.delete('/:_id/force', courseController.forceDelete);
router.delete('/:_id', courseController.delete);

module.exports = router;
