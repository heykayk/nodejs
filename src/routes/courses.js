const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/:_id/edit', courseController.edit);
router.put('/:_id', courseController.update);
router.patch('/:_id/restore', courseController.restore);
router.delete('/:_id', courseController.delete);
router.delete('/:_id/force', courseController.forceDelete);
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:slug', courseController.show);

module.exports = router;
