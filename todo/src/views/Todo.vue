<template>
  <div class="main">
    <div class="container">
      <div class="row">
        <div class="col-xl-3 d-flex justify-content-center">
          <strong>Здравствуйте {{ userName }}</strong>
        </div>
        <div class="col-xl-9">
          <TaskCreate @task-created="fetchTasks" />
          <TasksList @fetch-tasks="fetchTasks" :taskArray="taskList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskService from '@/Services/TaskService'
import TaskCreate from "@/components/TodoComponents/TaskCreate.vue"
import TasksList from "@/components/TodoComponents/TasksList.vue"

export default {
  name: 'todo-vue',
  components: { TaskCreate, TasksList },
  data() {
    return {
      userName: localStorage.getItem('username'),
      user_id: localStorage.getItem('userid'),
      taskList: [],
    };
  },
  methods: {
    async fetchTasks() {
      try {
        this.taskList = await TaskService.getAllTasks(this.user_id)
      } catch (e) {
        alert(e.massege)
      }
    }
  },
  mounted() {
    this.fetchTasks();
  }
}
</script>

<style scoped>

</style>