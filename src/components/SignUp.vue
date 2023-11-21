<template>
  <vContainer class="mt-5">
    <VRow>
      <VCol cols="8"></VCol>
      <VCol cols="4">
        <h2 class="text-blue text-center mx-auto">Sign Up</h2>
        <VForm v-model="valid" ref="form" lazy-validation>
          <VTextField
            label="Email"
            v-model="email"
            :rules="emailRules"
            required
          ></VTextField>
          <VTextField
            label="Password"
            v-model="password"
            :rules="passRules"
            required
          ></VTextField>
          <VTextField
            label="Re-Password"
            v-model="repass"
            :rules="repassRules"
            required
          ></VTextField>
          <VBtn @click="submit" class="w-100 bg-blue"> Log In </VBtn>
          <div class="d-flex justify-content-center mt-3">
            <span class="text-muted">Go back</span>
            <router-link to="/SignUp" class="ms-2">Log In</router-link>
          </div>
        </VForm>
      </VCol>
    </VRow>
  </vContainer>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    valid: true,

    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) =>
        /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(v) ||
        "E-mail must be valid",
    ],

    password: "",
    passRules: [
      (v) => !!v || "Password is required",
      (v) =>
        /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(v) ||
        "Password must be valid",
    ],

    repass: "",
    repassRules:"Re-Password is different",
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post("http://localhost:3000/account", {          
          email: this.email,
          password: this.password,
          money:0,
          position:"[]",
          openorder:"[]",
          history:"[]"

        });
      }
    },
    clear() {
      this.$refs.form.reset();
    },
  },
};
</script>
