<template>
    <div class="tasks_list_wrapper">

        <div>
            <strong>Ваши задачи:</strong>
        </div>
        <div class="tasks_list">
            {{ setArraysFinishedAndNot }}
            Ждут выполнения
            <draggable :list="taskArrayNotFinished" group="people" @start="drag = true"
                @end="drag = false, setIndexImportant()" item-key="id" :move="checkMove" ghost-class="ghost"
                class="list-group">
                <template #item="{ element, index }">
                    <Task v-model:set-imp-index="importantSetIndex" :imporatantIndex="index" draggable="true"
                        @task-updated="fetchTasks" @task-deleted="fetchTasks" :task="element" />
                </template>
            </draggable>
        </div>
        <div class="tasks_list">
            Выполненные
            <div v-for="item in taskArrayFinished" :key="item.imporatnt_index">
                <Task @task-updated="fetchTasks" @task-deleted="fetchTasks" :task="item" />
            </div>
        </div>

    </div>
</template>
  
    
<script>
import draggable from 'vuedraggable'
import Task from "@/components/TodoComponents/Task.vue"
export default {
    emits: ["fetch-tasks"],
    name: 'tasks-List-vue',
    components: { Task, draggable },
    props: {
        taskArray: {
            type: Array,
            // eslint-disable-next-line vue/require-valid-default-prop
            default: []
        }
    },
    data() {
        return {
            importantSetIndex: false,
            moveIndex: 0,
            drag: false,
            taskArrayNotFinished: [],
            taskArrayFinished: [],
        };
    },
    computed: {
        setArraysFinishedAndNot() {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.taskArrayFinished = []
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.taskArrayNotFinished = []

            for (let i = 0; i < this.taskArray.length; i++) {
                const task = this.taskArray[i];
                if (task.status === true) {
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.taskArrayNotFinished.push(task)
                }
                if (task.status === false) {
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.taskArrayFinished.push(task)
                }
            }
            return null
        },

    },
    methods: {
        setIndexImportant() {
            this.importantSetIndex = true
        },
        checkMove(e) {
            e.draggedContext.futureIndex;
        },
        async fetchTasks() {
            this.$emit("fetch-tasks")
        }
    }
}
</script>

<style scoped>
.tasks_list {
    background-color: rgb(212, 221, 226);
    border: solid 1px;
    border-radius: 10px;
    margin: 10px 0;
    padding: 10px;
}
</style>