const Router = require('express')
const router = new Router()
const taskController = require('../controllers/task.controller.js')

router.post('/create_task',  taskController.createTask)
router.get('/user_tasks/:id', taskController.getAllTasks)
router.put('/task_update/:id', taskController.updateTask)
router.delete('/task_delete/:id', taskController.deleteTask)

module.exports = router