<template>
  <v-container class="fill-height">
    <v-column class="mx-auto text-center">
      <v-img height="300" class="mx-auto" src="@/assets/img/logo-eagle.png" :width="300"/>
      <h3 >{{ title }}</h3>
      <span class="text-muted mx-auto">{{ description }}</span><br>
      <router-link to="/LogIn">
        <v-btn color="primary" :width="200" class="mt-3" to="/LogIn">Get Started</v-btn>
      </router-link>
    </v-column>
  </v-container>
</template>

<script >
  export default{
    data() {
      return {
        title:'The future of Digital Asset Trading',
        description:'Eagle Base is the best place for traders to make a lot of profits. With a simple interface that delivers a world-class trading experience, Eagle Base offers everything you need in one platform!',
      }
    },
  }
</script>
