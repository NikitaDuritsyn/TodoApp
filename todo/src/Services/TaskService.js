/* eslint-disable no-async-promise-executor */
import axios from 'axios';

const url = 'http://localhost:3000/api/'
class TaskService {

    static createTask(task) { // Создание
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post(url + `create_task`, task);
                resolve(response.data);
            } catch (e) {
                reject(e)
            }
        })
    }
    static getAllTasks(user_id) { // Взять все по id пользователя
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.get(url + `user_tasks/${user_id}`);
                resolve(response.data);
            } catch (e) {
                reject(e)
            }
        })
    }


    static updateThisTask(task, taskId) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.put(url + `task_update/${taskId}`, task);
                resolve(response.data);
            } catch (e) {
                reject(e)
            }
        })
    }

    static deleteThisTask(taskId) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.delete(url + `task_delete/${taskId}`);
                resolve(response.data);
            } catch (e) {
                reject(e)
            }
        })
    }
}

export default TaskService;