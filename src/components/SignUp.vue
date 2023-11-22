<template>
  <vContainer class="mt-5">
    <VRow>
      <VCol cols="8"></VCol>
      <VCol cols="4">
        <h2 class="text-blue text-center mx-auto">Sign Up</h2>
        <form action="" @submit.prevent="SignUp">
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="email" required>
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password" required>
            <label for="floatingPassword">Password</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="repass" required>
            <label for="floatingPassword">Re-Password</label>
          </div>
          <VBtn type="submit" color="primary" class="w-100">Sign Up</VBtn>
          <div class="d-flex justify-content-center mt-3">
            <span class="text-muted">Go back to </span>
            <router-link to="/LogIn" class="ms-2">Login</router-link>
          </div>
        </form>        
      </VCol>
    </VRow>
    <div class="position-absolute bottom-0 end-0">
      <v-alert  
        type="success"           
        border="start"
        v-show="success"
      >
        Sign Up success
      </v-alert>

      <v-alert          
        type="error"
        prominent
        border="start"
        v-show="error"
      >
        Re-Password is different
      </v-alert>
    </div>
  </vContainer>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    email: "",  
    password: "", 
    repass: "",
    success : false,
    error:false
  }),

  methods: {
    SignUp() {
      if(this.password == this.repass){
        axios.post("http://localhost:3000/account", {          
          email: this.email,
          password: this.password,
          money:0,
          position:"[]",
          openorder:"[]",
          history:"[]"
        }),
        this.success=true 
        set     
      }else{
        this.error=true
      }
    },
    
  },
};
</script>
