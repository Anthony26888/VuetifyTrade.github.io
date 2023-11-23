<template>
  <h2 class="text-blue text-center mx-auto">Welcome</h2>
  <form action="" @submit.prevent="Login">
    <div class="form-floating mb-3">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="email" required>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating mb-3">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password"
        required>
      <label for="floatingPassword">Password</label>
    </div>
    <VBtn type="submit" color="primary" class="w-100">Log In</VBtn>
    <div class="d-flex justify-content-center mt-3">
      <span class="text-muted">Don't have account? </span>
      <router-link to="/SignUp" class="ms-2">Sign Up</router-link>
    </div>
  </form>
  <div class="position-absolute bottom-0 end-0">
    <v-alert type="error" prominent border="start" v-show="error">
      Email or Password is not correct
    </v-alert>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: () => ({
    email: "",
    password: "",
    error: false,
  }),

  methods: {
    Login() {
      const url = "http://localhost:3000/account"
      axios
        .get(url)
        .then((response) => {
          const dataAccount = response.data;
          const user = dataAccount.find(
            (u) => u.email == this.email && u.password == this.password
          );
          if (user) {
            this.$router.push("/Trading");
            localStorage.setItem("user", this.email);
          } else {
            this.error = true;
          }
        })
        .catch((error) => {
          console.error("Error adding item:", error);
        });
    },

  },
};
</script>
