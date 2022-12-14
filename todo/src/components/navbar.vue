<template>
  <div id="navbar ">
    <nav class="navbar navbar-expand-lg navbar-white ">
      <div class="container">
        <button class="navbar-toggler btn btn-dark bg-dark_btnMenu" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
          aria-label="Toggle navigation">
          Меню
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div class="me-auto data-time-text">
            <div class="navbar-brand" href="/main"><div>TODO APP</div><div class="developers">(Дурицын Н.В. и Герасименко В.В.
                КТмо2-7)</div>
            </div>
          </div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/todo"><button class="btn btn-dark">Задачи</button></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/"><button class="btn btn-dark" @click="logout">Выход</button></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.developers {
  font-size: 12px;
  margin: 5px;
}

.navbar-brand {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  margin: 10px;
  font-size: 20px;
  color: rgb(22, 22, 22);
}

.navbar-toggler {
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
}

.bg-dark_btnMenu {
  background-color: rgb(22, 22, 22) !important;
  color: rgb(255, 255, 255);
}


.nav-item {
  margin: 10px;
}

.data-time-text {
  color: white;
  font-size: 18px;
}

.nav-link {
  color: white !important;
  font-size: 20px;
}
</style>

<script>
import authService from '../Services/AuthService';
export default {
  name: "Navbar-vue",
  methods: {
    logout() {
      authService.logout()
    }
  }
};
</script>
