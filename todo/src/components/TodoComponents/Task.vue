<!-- eslint-disable vue/no-mutating-props -->
<template>
    <div class="task_wrapper d-flex justify-content-between">
        {{ theTaskUpdate }}
        {{ setImporatantIndex }}
        <div class="d-flex w-100 align-items-center">
            <div>
                <button class="btn btn-dark delete" @click="deletTask">X</button>
            </div>
            <div v-if="theTask.status" class="task w-100 d-flex flex-column h-100 justify-content-around">
                <div class="d-flex">
                    <div>
                        <strong>Название:</strong>
                    </div>
                    <div v-if="!editTask">
                        {{ theTask.title }}
                    </div>
                    <div v-if="editTask">
                        <input class="title" v-model="theTask.title" type="text">
                    </div>
                </div>
                <div class="d-flex w-100">
                    <div>
                        <strong>Описание:</strong>
                    </div>
                    <div v-if="!editTask">
                        {{ theTask.description }}
                    </div>
                    <div class=" w-100" v-if="editTask">
                        <textarea class="discription" v-model="theTask.description"></textarea>
                    </div>
                </div>
            </div>
            <div v-if="!theTask.status" class="finaly task d-flex flex-column h-100 justify-content-around">
                <div>
                    <strong>Название:</strong>
                    {{ theTask.title }}
                </div>
                <div>
                    <strong>Описание:</strong>
                    {{ theTask.description }}
                </div>
            </div>
        </div>
        <div>
            <div>
                <button v-if="(!editTask && theTask.status)" class="btn btn-light" @click="taskEditor">Ред.</button>
                <button v-if="editTask" class="btn btn-light" @click="updateTask">Готово</button>
            </div>
            <div>
                <button v-if="theTask.status" class="btn btn-light" @click="updateTaskStatus">Выполнено</button>
                <button v-if="!theTask.status" class="btn btn-light" @click="updateTaskStatus">Вернуть</button>
            </div>
        </div>
    </div>
</template>
    
<script>
import TaskService from '@/Services/TaskService'
export default {
    emits: ['update:setImpIndex', 'task-updated', "task-deleted"],
    name: 'task-vue',
    props: {

        setImpIndex: {},
        imporatantIndex: {},
        task: {}
    },
    data() {
        return {
            editTask: false,
            theTask: {}
        };
    },
    methods: {
        taskEditor() {
            this.editTask = true
        },
        async updateTaskImportant() {
            try {
                await TaskService.updateThisTask(this.theTask, this.theTask.id)
                this.$emit("task-updated")
            } catch (e) {
                alert(e.massege)
            }
        },
        async updateTask() {
            try {
                await TaskService.updateThisTask(this.theTask, this.theTask.id)
                this.$emit("task-updated")
                if (this.editTask === true) {
                    this.editTask = false
                } else {
                    this.editTask = true
                }
            } catch (e) {
                alert(e.massege)
            }
        },
        async updateTaskStatus() {
            if (this.theTask.status === true) {
                this.theTask.status = false
            } else if (this.theTask.status === false) {
                this.theTask.status = true
            }

            try {
                await TaskService.updateThisTask(this.theTask, this.theTask.id).then(() => {
                    this.$emit("task-updated")
                })
            } catch (e) {
                alert(e.massege)
            }
        },

        async deletTask() {
            try {
                await TaskService.deleteThisTask(this.theTask.id).then(() => {
                    this.$emit("task-deleted")
                })
            } catch (e) {
                alert(e.massege)
            }
        }
    },
    computed: {
        setImporatantIndex() {
            if (this.setImpIndex === true) {
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                this.theTask.imporatant_index = this.imporatantIndex
                this.updateTaskImportant()
                const value = false
                this.$emit('update:setImpIndex', value)
            }

            return null
        },
        theTaskUpdate() {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.theTask = this.task
            return null
        }
    }
}
</script>

<style scoped>
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

.finaly {
    text-decoration: line-through;
}

.delete {
    font-size: 10px;
    /* padding: 0.125rem 0.25rem; */
    padding: 0.250rem 0.50rem;
}

.btn {
    font-size: 14px;
    margin: 5px;
}

.task {
    padding: 10px;
}

.task_wrapper {
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    border: solid 1px;
}
</style>