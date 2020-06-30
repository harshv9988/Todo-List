const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo_controller');
console.log('router loaded');

router.get('/',todoController.todo);
router.post('/create-task',todoController.add);
router.post('/delete-task',todoController.delete);
module.exports = router;