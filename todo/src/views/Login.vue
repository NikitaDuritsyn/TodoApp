<template>
  <div id="login">
    <div class="row g-0 align-items-center">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <div class="form-group mb-4 mt-4">
            <input v-bind:value="email" @input="email = $event.target.value" type="email" class="form-control"
              id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div class="form-group mb-4 mt-4">
            <input v-bind:value="password" @input="password = $event.target.value" type="password" class="form-control"
              id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div class="d-flex justify-content-between">
            <div>
              <button @click.prevent="loginGivToken" class="btn btn-dark">
                Войти
              </button>
            </div>
            <router-link to="/registration"><button class="btn btn-dark">Регистрация</button></router-link>
          </div>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<style scoped>
.row {
  height: 100vh;
}
.login_block {
  background-color: white;
}
</style>

<script>
import authService from "../Services/AuthService";
export default {
  name: "Login-vue",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async loginGivToken() {
      try {
        this.reviews = await authService.login(this.email, this.password);
        this.$router.push("todo");
      } catch (e) {
        alert(e.massege);
      }
    },
  },
};
</script>
