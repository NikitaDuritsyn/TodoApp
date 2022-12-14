<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="login">
    <div class="row g-0 align-items-center">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form action="">
          <input v-bind:value="name" @input="name = $event.target.value" type="text" class="form-control mb-3 mt-3"
            placeholder="Имя" />
          <input v-bind:value="lastname" @input="lastname = $event.target.value" type="text"
            class="form-control mb-3 mt-3" placeholder="Фамилия" />
          <input v-bind:value="email" @input="email = $event.target.value" type="text" class="form-control mb-3 mt-3"
            placeholder="Email" />
          <input v-bind:value="phone" @input="phone = $event.target.value" type="text" class="form-control mb-3 mt-3"
            placeholder="Номер телефона" />
          <input v-bind:value="password" @input="password = $event.target.value" type="text"
            class="form-control mb-3 mt-3" placeholder="Пароль" />

          <div class="d-flex justify-content-between">
            <div>
              <button @click.prevent="createUser" class="btn btn-dark">
                Зарегистрироваться
              </button>
            </div>
            <router-link to="/"><button class="btn btn-dark">Login</button></router-link>
          </div>

        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import AuthService from "../Services/AuthService";
export default {
  data() {
    return {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      role: "",
      password: "",
    };
  },
  methods: {
    async createUser() {
      try {
        await AuthService.registrationNewUser(
          this.name,
          this.lastname,
          this.email,
          this.phone,
          this.role,
          this.password
        );
        this.$refs.childComponent.fetchUsers();
      } catch (e) {
        alert(e.massege);
      }
    },
  },

  // Создать нового АДМИНИСТРАТОРА
  // ПОСЛЕДНЯЯ ВРОДЕ КАК СТРАНИЦА
};
</script>

<style scoped>
.row {
  height: 100vh;
}

.login_block {
  background-color: white;
}
</style>