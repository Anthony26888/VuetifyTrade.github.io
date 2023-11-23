<template>
  <v-toolbar color="light">
    <div class="d-flex">
      <v-img src="../../assets/img/logo-eagle.png" :width="32"></v-img>
      <router-link to="/" style="text-decoration: none">
        <h3 class="text-blue-lighten-1 ms-2">Eagle Base</h3>
      </router-link>
      
    </div>
        
    <v-spacer></v-spacer>
    <v-toolbar-items>
            
      <v-btn color="primary">
        <router-link to="/LogIn" style="text-decoration: none; color: inherit;"> Login</router-link>       
      </v-btn>
      <v-btn color="primary">
        <router-link to="/SignUp" style="text-decoration: none; color: inherit;"> SignUp</router-link>       
      </v-btn>
      <v-btn flat icon color="secondary">
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script setup>
  //
</script>
<style scoped>
  
</style>
