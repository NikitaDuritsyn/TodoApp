<template>
    <div class="tasks_create">
        <div><strong>Создать новую задачу</strong></div>
        <div>
            <div>
                <div>
                    Название:
                </div>
                <input class="title" v-model="task.title" type="text">
            </div>
            <div>
                Описание:
                <textarea v-model="task.description" class="discription" name="task" id="" cols="30"
                    rows="3"></textarea>
            </div>
            <div>
                <button class="btn btn-dark" @click="createTask">Добавить</button>
            </div>
        </div>
    </div>
</template>

<script>
import TaskService from '@/Services/TaskService'
export default {
    name: 'tasks-create-vue',
    props: {
    },
    data() {
        return {
            task: {
                title: '',
                description: '',
                status: true,
                imporatant_index: 0,
                user_id: localStorage.getItem("userid"),
            }
        };
    },
    methods: {
        async createTask() {
            try {
                await TaskService.createTask(this.task)
                this.task.description = ''
                this.task.title = ''
                this.$emit("task-created")
            } catch (e) {
                alert(e.massege)
            }
        }
    }
}
</script>

<style scoped>
.btn{
    font-size: 14px;
}
.title {
    border-radius: 5px;
    border: solid 1px;
    padding: 5px;
    outline: none;
}

.discription {
    outline: none;
    border-radius: 5px;
    border: solid 1px;
    padding: 5px;
    resize: none;
    width: 100%;
    height: 60px;
}
</style>
  