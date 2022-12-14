const db = require('../db.js')

class TaskController {
    // Создать
    async createTask(req, res) {
        try {
            const { title, description, imporatant_index, status, user_id } = req.body;
            const newTask = await db.query(`INSERT INTO tasks (title, description, status, imporatant_index, user_id ) values ($1, $2, $3, $4, $5) RETURNING *`, [title, description, status, imporatant_index, user_id])
            res.json(newTask.rows[0])
        } catch (e) {
            console.log('Ошибка ' + e.name + ":\n " + e.message + "\n\n" + e.stack);
        }
    }
    // Взять все по id пользователя
    async getAllTasks(req, res) {
        try {
            const user_id = req.params.id;
            const tasks = await db.query(`SELECT * FROM tasks where user_id = $1`, [user_id])

            tasks.rows.sort((a, b) => a.imporatant_index > b.imporatant_index ? 1 : -1);
            // tasks.rows.reverse()
            res.json(tasks.rows)
        } catch (e) {
            console.log('Ошибка ' + e.name + ":\n " + e.message + "\n\n" + e.stack);
        }
    }
    // Отредактировать products
    async updateTask(req, res) {
        try {
            const taskId = req.params.id
            const { title, description, status, imporatant_index } = req.body
            const taskNew = await db.query(`UPDATE tasks set title = $1, description = $2, status = $3, imporatant_index = $4 where id = $5 RETURNING *`, [title, description, status, imporatant_index, taskId])
            // const tasksNew = await db.query(`SELECT * FROM tasks`)
            res.json(taskNew.rows)
        } catch (e) {
            console.log('Ошибка ' + e.name + ":\n " + e.message + "\n\n" + e.stack);
        }
    }
    // Удалить
    async deleteTask(req, res) {
        try {
            const taskId = req.params.id
            const taskDeleted = await db.query(`DELETE FROM tasks where id = $1`, [taskId])
            res.json(taskDeleted.rows)
        } catch (e) {
            console.log('Ошибка ' + e.name + ":\n " + e.message + "\n\n" + e.stack);
        }
    }
}

module.exports = new TaskController()